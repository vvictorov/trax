import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { AppSettings } from './app-settings';
import {User} from './user';

@Injectable()
export class UsersService {

  constructor(private http: HttpClient) { }

  getAccountInfo(user: User): Promise<User> {
    return this.http.get(AppSettings.API_URL + 'account/' + user.id)
        .toPromise()
        .then(response => response as User[])
        .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
