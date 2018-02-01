import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  email;
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  onSignIn(form: NgForm) {

    const email = form.value.email;
    this.email = email;
    const pass = form.value.password;
    this.authService.signin(email, pass);
    this.authService.getUserName(email);
    form.reset();
  }

}
