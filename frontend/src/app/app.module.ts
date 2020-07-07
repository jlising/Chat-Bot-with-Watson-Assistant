import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Third party components
import { ToasterModule, ToasterService } from 'angular2-toaster';

//App components
import { AppGlobal } from './app.global';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjaxLoaderComponent } from './components/ajax-loader/ajax-loader.component';
import { ChatboxComponent } from './components/chatbox/chatbox.component';

// Templates
import { HeaderComponent } from './components/common/header.component';
import { FooterComponent } from './components/common/footer.component';
import { PageNotFoundComponent } from './components/common/page-not-found.component';
import { DefaultPageComponent } from './components/common/default-page.component';

// Services
import { MyHttpInterceptor } from './components/common/my.http.interceptor';
import { AjaxLoaderService } from './components/ajax-loader/ajax-loader.service';
import { ChatboxService } from './components/chatbox/chatbox.service';

@NgModule({
  declarations: [
   HeaderComponent,
   FooterComponent,
   PageNotFoundComponent,
   DefaultPageComponent,
   AjaxLoaderComponent,
   AppComponent,
   ChatboxComponent
  ],
  entryComponents: [],
  imports: [
     BrowserModule, //Configure browser-based application to transition from a server-rendered app. If not imported, ngIf, routings won't work.
     BrowserAnimationsModule,
     AppRoutingModule, //Routing
     HttpClientModule,
     FormsModule,
     ToasterModule
  ],
  providers: [  Title,
                AppGlobal,
                ToasterService,
                AjaxLoaderService,
                ChatboxService,
             	{provide: LocationStrategy, useClass: HashLocationStrategy},
                {provide: HTTP_INTERCEPTORS, useClass: MyHttpInterceptor, multi: true, }
             			 ],
  bootstrap: [AppComponent]
})
export class AppModule { }
