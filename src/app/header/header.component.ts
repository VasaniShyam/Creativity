import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  email;
  flag: boolean = false;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {

    this.authService.displayUsername()
      .subscribe(
      (email: string) => {
        this.email = email;
        this.flag = true;
      }
      );
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/']);
    this.flag = false;
  }

}
