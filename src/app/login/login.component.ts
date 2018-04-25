import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NetworkService} from '../services/network.service';
import {Router, Routes} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private net: NetworkService,private router:Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl('', [Validators.email, Validators.required]),
      'password': new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    this.net.login(this.loginForm.get('email').value.toString(), this.loginForm.get('password').value.toString()).then(()=>
      {
        this.router.navigateByUrl('/login/chat');
      }

    );
  }

}
