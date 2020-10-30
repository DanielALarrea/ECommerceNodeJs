
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private rootURL = '/api/users';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  // private handleError<T>(operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {

  //     // TODO: send the error to remote logging infrastructure
  //     console.error(error); // log to console instead
  
  //     // TODO: better job of transforming error for user consumption
  //     this.log(`${operation} failed: ${error.message}`);
  
  //     // Let the app keep running by returning an empty result.
  //     return of(result as T);
  //   };
  // }

  getUsers() {
    return this.http.get(this.rootURL);
  }

  getUserById(id: number): Observable<any> {
    return this.http.get<any>(this.rootURL + '/' + id);
  }

  addUser(email: string, password: string, role: string): Observable<any> {
    let params = {
      "email": email,
      "password": password,
      "role": role
    }

    return this.http.post(this.rootURL, params, this.httpOptions);
  }

  updateUserById(id: number, email: string, password: string, role: string): Observable<any> {
    let params = {
      "email": email,
      "password": password,
      "role": role
    }

    return this.http.put(this.rootURL + '/' + id, params, this.httpOptions);
  }

  deleteUserById(id: number): Observable<any> {
    return this.http.delete<any>(this.rootURL + '/' + id);
  }

}