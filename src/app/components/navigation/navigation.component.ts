import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {User} from '../../models/user';
import {AuthService} from '../../services/auth.service';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, OnDestroy {

    protected user: User;
    private authActionSubscription: Subscription;
    private returnUrl;

    constructor(private authService: AuthService, private router: Router) {
        this.authActionSubscription = this.authService.getAuthAction().subscribe(action => {
            this.user = this.authService.getUser();
            console.log(this.user);
        });
    }

    @Input('title') appTitle: string;
    public isCollapsed = true;

    public logout() {
        this.authService.logout();
        this.router.navigate(['/']);
    }
    ngOnInit() {
        this.user = this.authService.getUser();
    }

    ngOnDestroy() {
        this.authActionSubscription.unsubscribe();
    }

}
