import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  authenticated = false;

  private rootURL = '/api/users';

  constructor(private http: HttpClient) { }

  authenticate(credentials, callback) {

    const headers = new HttpHeaders(credentials ? {
        authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)
    } : {});

    this.http.get('user', {headers: headers}).subscribe(response => {
        if (response['name']) {
            this.authenticated = true;
        } else {
            this.authenticated = false;
        }
        return callback && callback();
    });
  }

  authenticateUser(email: string, password: string): Observable<any> {
    let users = this.http.get(this.rootURL);

    let params = new HttpParams();

    params.append('email', email);
    params.append('password', password);

    console.log(params);

    return this.http.get(this.rootURL + "/authenticate", {params: params});
  }

  authenticateUserById(id: number): Observable<any> {
    return this.http.get(this.rootURL + "/" + id);
  }
}