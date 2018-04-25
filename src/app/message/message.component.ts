import { Component, OnInit } from '@angular/core';
import {NetworkService} from '../services/network.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(private net: NetworkService,private router: Router) { }

  ngOnInit() {
  }

  logout()
  {
    this.net.signout().then((user) =>
    this.router.navigate(['/login'])

    );
  }

}
