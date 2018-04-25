import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {NetworkService} from '../services/network.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupform: FormGroup;
  constructor(private auth: NetworkService, private router: Router) { }

  ngOnInit() {
    this.signupform = new FormGroup({
      'email': new FormControl('', [Validators.email, Validators.required]),
      'password': new FormControl('', [Validators.required])
    });
  }

  signup() {
    this.auth.signup(this.signupform.get('email').value, this.signupform.get('password').value).then((user) =>
      this.router.navigate(['/login'])

    );
  }

}
