
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  rootURL = '/api/users';

  getUsers() {
    return this.http.get(this.rootURL);
  }

  getUserById(id: number): Observable<User> {
    // return this.http.get(this.rootURL + '/' + id);
    return this.http.get<User>(this.rootURL + '/' + id);
  }

  addUser(user: any) {
    return this.http.post(this.rootURL, {user});
  }

}