import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  register(email: string, password: string) {
    this.userService.addUser(email, password, "user").subscribe();
    this.returnToLogin();
  }

  returnToLogin() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
