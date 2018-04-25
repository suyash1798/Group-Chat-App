import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MessageComponent } from './message/message.component';
import { MsgFieldComponent } from './message/msg-field/msg-field.component';
import { MessageShowComponent } from './message/message-show/message-show.component';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {environment} from '../environments/environment';
import {AngularFireModule} from 'angularfire2';
import {NetworkService} from './services/network.service';
import {AngularFireDatabase} from 'angularfire2/database';
import {MatCardModule} from '@angular/material/card';
import {RouterModule} from '@angular/router';
import {routes} from './routes/routes/routes.module';
import {AngularFireAuth} from 'angularfire2/auth';
import {AuthguardService} from './AuthGaurd/authgaud';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MessageComponent,
    MsgFieldComponent,
    MessageShowComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [NetworkService, AngularFireDatabase, AngularFireAuth, AuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
