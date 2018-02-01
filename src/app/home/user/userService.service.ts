import { Http } from "@angular/http";
import * as firebase from 'firebase';
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { Response } from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class UserService {


  random: string = 'Male';
  userInfo = [];
  constructor(private http: Http, private router: Router) { }


  generateRandomUser() {

    return this.http.get('https://randomuser.me/api/?results=100&page=5');


  }
  getRandomGender(key: any, value: any) {
    if (this.random === 'Male') {
      return this.http.get('https://randomuser.me/api/?gender=male&' + key + '=' + value + '&results=100');
    } else if (this.random === 'Female') {
      return this.http.get('https://randomuser.me/api/?gender=female&' + key + '=' + value + '&results=100');
    }

  }

  addDatabase(data) {

    return this.http.post('https://creativity-fd595.firebaseio.com/data.json', data);
  }

  getData() {
    return this.http.get('https://creativity-fd595.firebaseio.com/data.json');

  }


}
