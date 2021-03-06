import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-admin-display',
  templateUrl: './admin-display.component.html',
  styleUrls: ['./admin-display.component.css']
})
export class AdminDisplayComponent implements OnInit {

  allUsers: any = [];

  constructor(
    private userService: UserService,
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAll();
    if(!this.loginService.checkLoggedIn()) {
      this.router.navigate(['/login']);
    }
  }
  
  getAll() {
    this.userService.getUsers()
    .subscribe(allUsers => {
      this.allUsers = allUsers;
    });
  }

  update(id: number, email: string, password: string, role: string) {
    this.userService.updateUserById(id, email, password, role).subscribe();
    location.reload();
  }

  add(email: string, password: string, role: string) {
    if(email.trim() && password.trim() && role.trim()) {
      this.userService.addUser(email, password, role).subscribe();
      location.reload();
    } else {
      alert("The fields cannot be empty");
    }
  }

  delete(id: number) {
    if(confirm("Are you sure you want to delete this account?")) {
      console.log("Deleting user: " + id);
      this.userService.deleteUserById(id).subscribe();
      location.reload();
    }
  }

  returnHome() {
    let homeURL = '/home/' + localStorage.getItem("loggedInUser");
    this.router.navigate([homeURL]);
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
