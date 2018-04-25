import { Component, OnInit } from '@angular/core';
import {NetworkService} from '../../services/network.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-message-show',
  templateUrl: './message-show.component.html',
  styleUrls: ['./message-show.component.css']
})
export class MessageShowComponent implements OnInit {

  items: any[];
  constructor(private net: NetworkService) { }

  ngOnInit() {
    this.net.get().subscribe(data=>{
      this.items = data;
    });
  }

}
