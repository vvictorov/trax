import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from '../../models/user';
import {UsersService} from '../../services/users.service';
import {AuthService} from '../../services/auth.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit, OnDestroy {

    subscription: Subscription;
    public user: User;
    public accountData;

    constructor(private usersService: UsersService, private authService: AuthService) {
        if (this.authService.check()) {
            this.user = this.authService.getUser();
        }
        this.subscription = this.authService.getAccountInfo(this.user.id).subscribe(data => {
            this.accountData = data.json();
        });
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
