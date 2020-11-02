import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loggedInUser = [];
  userRole;

  constructor(
    private userService: UserService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getLoggedInUser();
  }

  getLoggedInUser() {
    console.log("local storage value");
    console.log(localStorage.getItem("loggedInUser"));
    let loggedInId = Number(localStorage.getItem("loggedInUser"));
    this.userService.getUserById(loggedInId).subscribe(user => {
      this.loggedInUser = user;
    });
    console.log("this loggedInUser");
    console.log(this.loggedInUser);
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  profile() {
    let profileUrl = '/home/' + localStorage.getItem("loggedInUser") + '/profile';
    this.router.navigate([profileUrl]);
  }

  admin() {
    let adminUrl = '/home/' + localStorage.getItem("loggedInUser") + '/admin';
    this.router.navigate([adminUrl]);
  }
}
