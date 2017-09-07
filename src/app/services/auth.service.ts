import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { User } from '../models/user';

@Injectable()
export class AuthService {

    private accessToken: string;
    private user: User;

    constructor(private http: Http) {
        const user = localStorage.getItem('currentUser');
        if (user) {
            const data = JSON.parse(user);
            this.user = new User(data.id, data.name, data.email);
        }
    }

    public getAccessToken(): string {
        return this.accessToken;
    }

    public getUser(): User {
        return this.user;
    }

    public check(): boolean {
        return this.user !== null;
    }

    login(username: string, password: string) {
        return this.http.post('/users/authenticate', { email: username, password: password })
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                const user = response.json();
                if (user && user.token) {
                    this.user = new User(user.id, user.name , user.email);
                    this.accessToken = user.token;
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
                return user;
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
