import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import {AppSettings} from './app-settings';
import {User} from './user';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class UsersService {

    private accessToken: string;
    private refreshToken: string;

    constructor(private http: HttpClient) {
        this.accessToken = localStorage.getItem('accessToken');
        this.refreshToken = localStorage.getItem('accessToken');
        if (this.accessToken == null) {
            this.getAccessToken().subscribe(data => {
                this.accessToken = data.access_token;
                this.refreshToken = data.refresh_token;
                localStorage.setItem('accessToken', this.accessToken);
                localStorage.setItem('refreshToken', this.refreshToken);
            });
        }
    }

    getAccessToken() {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });

        const postData = {
            grant_type: 'password',
            client_id: AppSettings.OAUTH_CLIENT_ID,
            client_secret: AppSettings.OAUTH_SECRET,
            username: 'admin@test.com',
            password: 'admin1234',
            scope: ''
        };

        return this.http.post(AppSettings.OAUTH_URL, JSON.stringify(postData), {
            headers: headers
        })
            .map((response: Response) => response)
            .catch((error: any) => Observable.throw(error.error || 'Server error'));
    }

    public getAccountInfo(userId: number): Observable<User[]> {
        const headers = new HttpHeaders({
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + this.accessToken,
        });

        return this.http.get(AppSettings.API_URL + 'account/' + userId, {
            headers: headers
        })
            .map((res: Response) => res)
            .catch((error: any) => Observable.throw(error || 'Server error'));
    }
}
