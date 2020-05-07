import { Page } from './../../layout/layout';
import { UserProvider } from './../../data/user.provider';
import { Component, OnInit } from '@angular/core';
import { User } from '../../data/user';
import { LayoutProvider } from 'src/app/layout/layout.provider';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[];

  constructor(
    private userProvider: UserProvider,
    private layout: LayoutProvider
  ) { }

  ngOnInit() {
    const page: Page = {
      id: '/settings/users',
      name: 'Users',
      paths: [
          '/settings/users'
      ],
      closeable: false
    };
    this.layout.registerPage(page);

    this.userProvider.all('displayName', 'asc').subscribe(users => {
      this.users = users;
    });
  }

  add() {
  }

}
