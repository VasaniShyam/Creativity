import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor() { }
  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBwOwjKyV5xfO80RakKv5NUgjtskfxUTmY',
    authDomain: 'creativity-fd595.firebaseapp.com'
    });
  }

}
