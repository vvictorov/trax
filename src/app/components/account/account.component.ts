import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from '../../models/user';
import {UsersService} from '../../services/users.service';
import {AuthService} from '../../services/auth.service';
import {Subscription} from 'rxjs/Subscription';
import {ImageUploadComponent} from '../widgets/image-upload/image-upload.component';
import {MatDialog} from '@angular/material';

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit, OnDestroy {

    subscription: Subscription;
    public user: User;
    public accountData;

    constructor(private usersService: UsersService, private authService: AuthService, private changeAvatarDialog: MatDialog) {
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

    openDialog(): void {
        const dialogRef = this.changeAvatarDialog.open(ImageUploadComponent, {
            panelClass: 'change-avatar-dialog',
            data: {}
        });

        // dialogRef.componentInstance.onAvatarChanged.subscribe((data) => {
        //     console.log(data);
        // });
    }

}
