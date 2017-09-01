import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  user: User;
  constructor(private usersService: UsersService) { }
  ngOnInit() {
    const user = new User(1, 'hey');
    this.usersService.getAccountInfo(user)
        .then(data => {
          this.user = new User(data.id, data.name, data.email);
        });
  }

}
