import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {UsersService} from '../../services/users.service';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  protected user: User;
  constructor(private usersService: UsersService, private authService: AuthService) {
    if (this.authService.check()) {
        this.user = this.authService.getUser();
    }
  }
  ngOnInit() {
  }

}
