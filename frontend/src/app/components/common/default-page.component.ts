import { environment } from '../../../environments/environment';
import {Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AppGlobal } from '../../app.global';
import { ToasterService } from 'angular2-toaster';

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
                private _toasterService : ToasterService){}

   //Apply definition since we implemented OnInit
   ngOnInit() {
   }
}
