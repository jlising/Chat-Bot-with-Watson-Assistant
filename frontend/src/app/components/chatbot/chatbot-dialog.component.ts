import { environment } from '../../../environments/environment';
import { Component, Inject, AfterViewChecked, ElementRef, ViewChild, OnInit, ViewEncapsulation} from '@angular/core';
import { ToasterService } from 'angular2-toaster';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { ChatBotService } from'./chatbot.service';
import { Sentence } from "./Sentence";

@Component({
  selector: 'app-chatbot-dialog',
  templateUrl: './chatbot-dialog.component.html',
  styleUrls: ['./chatbot-dialog.component.css']
})
export class ChatbotDialogComponent implements OnInit {

    public currentDialog : Sentence[] = [];
  	private context:any={};
  	private message:string;
  	public queryString:string = "";

  @ViewChild('scrollMe') private myScrollContainer: ElementRef;

  constructor(private _toasterService : ToasterService,
              private _chatBotService : ChatBotService,
              public dialogRef: MatDialogRef<ChatbotDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.scrollToBottom();
  }

  ngAfterViewChecked() {
        this.scrollToBottom();
  }

  scrollToBottom(): void {
  	  try {
  		  this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
  	  } catch(err) { }
  }

  submit(){
  		let obj:Sentence = new Sentence();
  		obj.direction="to-watson";
  		obj.text=this.queryString;
  		this.currentDialog.push(obj);
  		this._callConversationBFF(this.queryString);
  		this.queryString="";
  }

  private _callConversationBFF(msg:string) {

      this._chatBotService.submitMessage({text : msg , context : this.context}).subscribe(
                response => {
                  //this.context = data.context;
                  let s:Sentence = new Sentence();
                  s.direction = "from-watson";
                  s.text = response;
                  //s.options = data.context.predefinedResponses;
                  this.currentDialog.push(s);
                  this.queryString="";

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

  assistantResponse(resp) {
      let obj:Sentence = new Sentence();
      obj.direction="to-watson";
      this.queryString=resp;
      obj.text=resp;
      this.currentDialog.push(obj);
      this._callConversationBFF(resp);
  }

  keyMessage(event){
     if(event.keyCode == 13) {
        this.submit();
      }
  }
}
