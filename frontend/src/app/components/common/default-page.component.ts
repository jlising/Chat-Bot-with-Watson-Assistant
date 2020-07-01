/**
 * Default page component
 * @author : Jesus Lising <jess.lising@gmail.com>
 */
import { environment } from '../../../environments/environment';
import {Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AppGlobal } from '../../app.global';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ToasterService } from 'angular2-toaster';
import { ChatbotDialogComponent } from '../chatbot/chatbot-dialog.component';

@Component({
	selector : 'default-page',
	templateUrl :'./default-page.component.html',
	styleUrls: ['./default-page.component.css'],
	encapsulation: ViewEncapsulation.None
})
export class DefaultPageComponent   implements OnInit {

   // Inject private classes via constructor
   constructor( public _appGlobal : AppGlobal,
                private _router : Router,
                private _toasterService : ToasterService,
                public _dialog: MatDialog ){}

   //Apply definition since we implemented OnInit
   ngOnInit() {
   }

   /*
    * Open chat bot window
    */
   public openChatBotDialog(): void {
           // Open the dialog and pass the data
           let dialogRef = this._dialog.open(ChatbotDialogComponent, {
             height: '395px',
             width: '650px',
             maxHeight: '495px',
             minHeight: '495px',
             minWidth:'650px',
             maxWidth: '650px',
             data: { }
           });

           // After close, determine the selected employee
           dialogRef.afterClosed().subscribe(result => {
               if(result != undefined){
               }
           });
       }
}
