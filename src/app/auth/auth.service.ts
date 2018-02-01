import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import * as firebase from 'firebase';
import { Router } from "@angular/router";
import { Subject } from "rxjs/Subject";

@Injectable()
export class AuthService {
  email = new Subject<string>();
  token: string;
  login: boolean;
  constructor(private http: Http, private router: Router) { }

  signUp(email: string, password: any) {

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
      (res) => {
        this.router.navigate(['/signin']);
      }
      )
      .catch(
      (error) => console.log(error)
      );

  }
  signin(email: string, passsword: any) {


    this.login = true;
    firebase.auth().signInWithEmailAndPassword(email, passsword)
      .then(
      (res) => {
        this.router.navigate(['/']);
      }
      ).catch(
      (error) => console.log(error)
      );



  }

  getToken() {
    firebase.auth().currentUser.getToken()
      .then(
      (token) => this.token = token
      );
    return this.token;
  }
  isAuth() {
    return this.token != null;
  }

  getUserName(email) {
    return this.email.next(email);
  }
  displayUsername() {
    return this.email;
  }
  logout() {

    firebase.auth().signOut();
    this.token = null;
  }

}
