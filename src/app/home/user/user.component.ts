import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { flatten } from '@angular/compiler';
import { UserService } from './userService.service';

import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Form } from '@angular/forms';
import { ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';




@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {



  private subsciption: Subscription;
  users1 = [];
  genders = ['Male', 'Female'];
  pages = [];
  date = [];


  constructor(private http: Http, private router: Router,
    private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.subsciption = this.userService.generateRandomUser()
      .subscribe(
      (res: Response) => {
        this.users1 = res.json()['results'];
        this.pages.length = res.json()['info'].page;

        for (const result of res.json()['results']) {

          this.date.push(result.dob.substr(0, 10));

        }
      }
      );
    console.log(this.date);


  }
  getGender(form: NgForm) {

    //console.log(form.value.nal);
    if (this.userService.random = form.value.gender) {


      this.subsciption = this.userService.getRandomGender('nat', form.value.nal)
        .subscribe(
        (res: Response) => {

          this.users1 = res.json()['results'];


          this.pages.length = res.json()['info'].page;

        }
        );

    } else if (this.userService.random = form.value.gender) {

      this.subsciption = this.userService.getRandomGender('nat', form.value.nal)
        .subscribe(
        (res: Response) => {
          this.users1 = res.json()['results'];
          this.pages.length = res.json()['info'].page;

        }
        );

    }
  }



  onSelectUser(data) {

    console.log(data);

    this.userService.userInfo = data;
    this.router.navigate(['filter']);


  }
  ngOnDestroy() {
    this.subsciption.unsubscribe();
  }
}

