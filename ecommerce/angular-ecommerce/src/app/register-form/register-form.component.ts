import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { equal } from 'assert';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  register(email: string, password: string, confirmPass: String) {
    if(email.trim() && password.trim() && confirmPass.trim()) {
      if(password == confirmPass) {
        this.userService.addUser(email, password, "user").subscribe();
        this.returnToLogin();
      } else {
        alert("The given passwords do not match");
      }
    } else {
      alert("The fields cannot be empty");
    }
  }

  returnToLogin() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
