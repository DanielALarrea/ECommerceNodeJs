import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from '../service/user.service';

import { User } from '../models/user.model';
import { EmailValidator } from '@angular/forms';
import { identifierModuleUrl } from '@angular/compiler';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.css']
})
export class UserDisplayComponent implements OnInit {
    id;
    user;
    userData: any = [];
    allUsers: any = [];

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.get();
    this.getAll();
  }

  get() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUserById(this.id)
      .subscribe(user => {
        this.user = user;
        this.userData = user;
      });
    }
  
  getAll() {
    this.userService.getUsers()
    .subscribe(allUsers => {
      this.allUsers = allUsers;
    });
  }

  update(id: number, email: string, password: string, role: string) {
    this.userService.updateUserById(id, email, password, role).subscribe();
  }

  register(email: string, password: string, role: string) {
    this.userService.addUser(email, password, role)
      .subscribe(user => {
        this.allUsers.push(user);
      });
  }

  delete(id: number) {
    console.log("Deleting user: " + id);
    this.userService.deleteUserById(id).subscribe();
  }

  returnHome() {
    let homeURL = '/home/' + localStorage.getItem("loggedInUser");
    this.router.navigate([homeURL]);
  }

}
