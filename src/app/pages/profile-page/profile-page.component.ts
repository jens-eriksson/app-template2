import { Router } from '@angular/router';
import { AuthProvider } from './../../auth/auth.provider';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  constructor(private auth: AuthProvider, private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.auth.logout().then(() => {
      this.router.navigate(['login']);
    });
  }

}
