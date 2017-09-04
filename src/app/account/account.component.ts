import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {UsersService} from '../users.service';
import {UserResponse} from '../response-interfaces';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  user: User;
  constructor(private usersService: UsersService) { }
  ngOnInit() {
    this.usersService.getAccountInfo(1)
        .subscribe(data => {
          this.user = new User(data.id, data.name, data.email);
        });
  }

}
