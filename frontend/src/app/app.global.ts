import { environment } from '../environments/environment';
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { Router } from '@angular/router';
import { ToasterService } from 'angular2-toaster';

@Injectable()
export class AppGlobal {
    public appTitle : string = environment.appTitle;
    public appVersion : string = environment.appVersion;
    public copyrightYear : string = environment.copyrightYear;

    // Inject private classes via constructor
    constructor(private _router : Router, private _toasterService : ToasterService){

    }
}
