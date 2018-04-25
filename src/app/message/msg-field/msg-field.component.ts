import { Component, OnInit } from '@angular/core';
import {NetworkService} from '../../services/network.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-msg-field',
  templateUrl: './msg-field.component.html',
  styleUrls: ['./msg-field.component.css']
})
export class MsgFieldComponent implements OnInit {

  msgform: FormGroup;
  message: string;
  constructor(private net: NetworkService) { }

  ngOnInit() {
    this.msgform = new FormGroup({
      'message': new FormControl('', Validators.required),
    });
  }

  send() {
     this.message = this.msgform.get('message').value.toString();
     this.net.send(this.message).then((data) => console.log('saved'));
    this.msgform.get('message').reset();
    this.msgform.get('message').markAsUntouched();
  }
}
