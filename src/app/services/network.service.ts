import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {query} from '@angular/core/src/animation/dsl';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase';

@Injectable()
export class NetworkService {

  item: any;
  constructor(private fdb: AngularFireDatabase, private auth: AngularFireAuth) {
    this.item = this.fdb.list('message', q => q.limitToLast(5));
  }

  send(message) {
    return this.item.push({messages: message, name: this.auth.auth.currentUser.email} );
  }

  get() {
    return this.fdb.list('message',q=> q.limitToLast(5)).valueChanges();
  }
  status() {
    return this.auth.authState;
  }

  login(email, password) {
    return this.auth.auth.signInWithEmailAndPassword(email, password);

  }
  signup(email, password) {
    return this.auth.auth.createUserWithEmailAndPassword(email, password);
  }
  signout(){
    return this.auth.auth.signOut();
  }
}
