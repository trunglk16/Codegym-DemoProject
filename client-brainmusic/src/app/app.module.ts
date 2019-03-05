import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RegisterFormComponent} from './register-form/register-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RegisterService} from './shared/register.service';
import {EmailFormComponent} from './email-form/email-form.component';
import {AlertComponent} from './alert/alert.component';
import {EmailService} from './shared/email.service';
import { MusicComponent } from './music/music.component';
import {MusicService} from './shared/music.service'
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    EmailFormComponent,
    AlertComponent,
    MusicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
    
  ],
  providers: [RegisterService,
    EmailService,MusicService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
