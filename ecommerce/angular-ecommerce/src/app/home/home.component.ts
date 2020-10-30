import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loggedInUser = [];
  userRole;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getLoggedInUser();
  }

  getLoggedInUser() {
    console.log(localStorage.getItem("loggedInUser"));
    let loggedInId = Number(localStorage.getItem("loggedInUser"));
    this.userService.getUserById(loggedInId).subscribe(user => {
      this.loggedInUser = user;
    });
    console.log(this.loggedInUser);
  }

}
