import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loggedInId: number;

  constructor(
    private loginService: LoginService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  login(email: string, password: string) {
    this.loginService.authenticateUser(email, password)
      .subscribe(id => {
        if(id.length > 0) {
          this.loggedInId = id[0].id;
          localStorage.setItem("loggedInUser", this.loggedInId.toString());
          this.router.navigate(['/home', this.loggedInId]);
        } else {
          alert("No user found, please try again");
        }
      })
  }

  loginById(id: number) {
    this.loginService.authenticateUserById(id);
    localStorage.setItem("loggedInUser", id.toString());
    console.log(localStorage.getItem("loggedInUser"));
    this.router.navigate(['/home', id]);
  }

  travelToRegister() {
    this.router.navigate(['/register']);
  }
}
