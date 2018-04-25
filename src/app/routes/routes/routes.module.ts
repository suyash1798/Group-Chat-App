import {Routes} from '@angular/router';
import {LoginComponent} from '../../login/login.component';
import {MessageComponent} from '../../message/message.component';
import {AuthguardService} from '../../AuthGaurd/authgaud';
import {SignupComponent} from '../../signup/signup.component';

export const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
    {path: 'login/chat', component: MessageComponent , canActivate: [AuthguardService]},
  {path: 'signup', component: SignupComponent}
  ];

