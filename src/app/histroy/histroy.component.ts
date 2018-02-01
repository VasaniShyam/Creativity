import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { UserService } from '../home/user/userService.service';
import { Response } from '@angular/http';


@Component({
  selector: 'app-histroy',
  templateUrl: './histroy.component.html',
  styleUrls: ['./histroy.component.scss']
})
export class HistroyComponent implements OnInit {



  usersData = [];
  constructor(private http: Http, private userService: UserService) { }

  ngOnInit() {

  //  this.users = this.userService.addHistory;
    this.userService.getData()
    .subscribe(
    (data: Response) => {

      console.log(data);

      let temp = data.json();

      // temp.forEach(element => {
      //   console.log(element,'___');
      // });

      for (let elm in temp) {
        if (temp.hasOwnProperty(elm)) {
          this.usersData.push(temp[elm]);
          //  ;
        }
      }

      console.log(this.usersData);


      // this.usersData = JSON.parse(JSON.stringify(this.usersData));
      // console.log(this.usersData);
    }
    );
    // console.log(this.users);
  }
  getHistory() {

  }
}
