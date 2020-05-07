import { UserProvider } from './../../data/user.provider';
import { LayoutProvider } from './../../layout/layout.provider';
import { Page } from './../../layout/layout';
import { Router } from '@angular/router';
import { AuthProvider } from './../../auth/auth.provider';
import { Component, OnInit } from '@angular/core';
import { User } from './../../data/user';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  user: User;

  constructor(
    private auth: AuthProvider,
    private router: Router,
    private layout: LayoutProvider,
    private userProvider: UserProvider
    ) { }

  ngOnInit() {
    const page: Page = {
      id: '/profile/profile-page',
      name: 'My Profile',
      paths: [
          '/profile/profile-page',
          '/profile/edit-profile',
          '/profile/change-password'
      ],
      closeable: false
    };
    this.layout.registerPage(page);

    this.auth.user.subscribe(user => {
      this.user = user;
    });
  }

  logout() {
    this.auth.logout()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch(err => {
        console.log(err.message);
      });
  }

  edit() {
    this.router.navigate(['/profile/edit-profile']);
  }

  changePassword() {
    this.router.navigate(['/profile/change-password']);
  }
}
