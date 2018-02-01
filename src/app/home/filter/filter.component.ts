import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/userService.service';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  userData = [];
  fname;
  lname;
  constructor(private http: Http, private router: Router, private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.userData = this.userService.userInfo;
     }
  onAddHistory() {

    this.userService.addDatabase(this.userData)
      .subscribe(
      (res) =>
        console.log(res)

      );
      this.router.navigate(['/user'], { relativeTo: this.route });
  }









}
