import { Component, AfterViewInit, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ToasterService } from 'angular2-toaster';
import { ChatboxService } from './chatbox.service';
import { AppGlobal } from '../../app.global';

import { Sentence } from './sentence'

declare var $:any;

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChatboxComponent implements OnInit {

    public currentDialog : Sentence[] = [];
    public context = {'type':'base'}; // used to keep the Conversation context
    public message : string;
    public type:string = "base";
    public queryString : string;

  constructor(private _chatBoxService : ChatboxService,
			  private _toasterService : ToasterService,
              private _appGlobal : AppGlobal) {}

  ngOnInit() {
	  // Get the session id
      this.getSessionID();
  }

  ngAfterViewInit() {
    //Hide the chatBox by default
    $('.chat-box').hide();
    $('.chat-trigger-open').bind('click', this._openChatBox);
    $('.chat-trigger-close').bind('click', this._closeChatBox);
  }
  /**
   * Open chat box
   */
  private _openChatBox(){
    $('.chat-box').show();
    $('.chat-trigger-open').hide();
	$('.scrolling-box').scrollTop($('.scrolling-box')[0].scrollHeight);
  }

  /**
   * Close chat box
   */
  private _closeChatBox(){
    $('.chat-box').hide();
    $('.chat-trigger-open').show();
  }

  /**
   * Send message to websocket
   */
  public submit() {
    let obj:Sentence = new Sentence();
	obj.direction="to-watson";
	obj.text = this.queryString;
	obj.sessionId = this._appGlobal.userSession.sessionId;
	this.currentDialog.push(obj);
	this._callConversation(this.queryString);
	this.queryString = "";
  }
  
  /**
   * Call conversation
   */
  private _callConversation(msg:string) {
      this._chatBoxService.submitMessage({text : msg , context : this.context, sessionId : this._appGlobal.userSession.sessionId}).subscribe(
                response => {
					
                  //Iterate in the response
                  response.forEach(element => {
                       let s:Sentence = new Sentence();
                       s.direction = "from-watson";

                       if(element.response_type == 'text'){
                        s.text = element.text;
                       }

                       if(element.response_type == 'image'){
                        s.source = element.source;
                       }

                       if(element.response_type == 'option'){
                           s.title = element.title;
                           s.options = element.options
                       }

                      this.currentDialog.push(s);
                  });
				  
                  this.queryString="";
				  $('.scrolling-box').scrollTop($('.scrolling-box')[0].scrollHeight);
				  console.log($('.scrolling-box')[0].scrollHeight);

                },
                (err: HttpErrorResponse) => {
                  this._toasterService.pop('error', '', err.status + ' ' + err.statusText);
                  if (err.error instanceof Error) {
                    console.log("Client-side error occured.");
                  } else {
                    console.log("Server-side error occured.");
                  }
                }
          );
  }
	
  /**
   * Response onClick
   */
  public clickResponse(message : string) {
      let obj:Sentence = new Sentence();
      obj.direction = "to-watson";
      this.queryString = message;
      obj.text = message;
      obj.sessionId = this._appGlobal.userSession.sessionId;
      this.currentDialog.push(obj);
      this._callConversation(message);
  }
  
  /**
   * Key event on textbox
   */
  keyMessage(event){
     if(event.keyCode == 13) {
        this.submit();
      }
  }
  
  /**
   * Get conversation session id
   */
  public getSessionID(){
        this._chatBoxService.getSessionID().subscribe(
                response => {
                    var sessionObject = { sessionId: response.sessionId };
                    this._appGlobal.userSession = sessionObject;

                    //Put in local storage to persists
                    localStorage.setItem("userSession",JSON.stringify(sessionObject));

                    console.log(this._appGlobal.userSession);
                },
                (err : HttpErrorResponse) => {
                  this._toasterService.pop('error', '', err.status + ' ' + err.statusText);
                    if (err.error instanceof Error) {
                      console.log("Client-side error occured.");
                    } else {
                      console.log("Server-side error occured.");
                    }
                }
          );
  }
}
