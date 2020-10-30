import { Component, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from './service/user.service';
import { LoginService } from './service/login.service'
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

  constructor(private loginService: LoginService, private http: HttpClient, private router: Router) {
    this.loginService.authenticate(undefined, undefined);
  }

  title = 'angular-ecommerce';

  userForm = new FormGroup({
    firstName: new FormControl('', Validators.nullValidator && Validators.required),
    lastName: new FormControl('', Validators.nullValidator && Validators.required),
    email: new FormControl('', Validators.nullValidator && Validators.required)
  });

  users: any[] = [];
  userCount = 0;

  destroy$: Subject<boolean> = new Subject<boolean>();

  onSubmit() {
    // this.appService.addUser(this.userForm.value).pipe(takeUntil(this.destroy$)).subscribe(data => {
    //   console.log('message::::', data);
    //   this.userCount = this.userCount + 1;
    //   console.log(this.userCount);
    //   this.userForm.reset();
    // });
  }

  // getAllUsers() {
  //   this.appService.getUsers().pipe(takeUntil(this.destroy$)).subscribe((users: any[]) => {
  //       this.users = users;
  //   });
  // }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  // logout() {
  //   this.http.post('logout', {}).finally(() => {
  //       this.loginService.authenticated = false;
  //       this.router.navigateByUrl('/login');
  //   }).subscribe();
  // }
}