import {Component, OnInit, Input} from '@angular/core';
import {User} from '../../models/user';
import {AuthService} from '../../services/auth.service';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

    protected user: User;

    constructor(private authService: AuthService) {
    }

    @Input('title') appTitle: string;
    public isCollapsed = true;

    ngOnInit() {
        this.user = this.authService.getUser();
    }

}
