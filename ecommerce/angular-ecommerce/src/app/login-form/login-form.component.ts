import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loggedInId;

  constructor(
    private loginService: LoginService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  login(email: string, password: string) {
    this.loginService.authenticateUser(email, password)
      .subscribe(user => {
        this.loggedInId = user.id;
        console.log(user);
        console.log(this.loggedInId);
        this.router.navigate(['/home', this.loggedInId]);
      })
  }

  loginById(id: number) {
    this.loginService.authenticateUserById(id);
    localStorage.setItem("loggedInUser", id.toString());
    console.log(localStorage.getItem("loggedInUser"));
    this.router.navigate(['/home', id]);
  }
}
