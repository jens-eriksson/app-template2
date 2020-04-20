import { AuthProvider } from './../auth/auth.provider';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LayoutProvider } from '../layout/layout.provider';
import { LayoutState } from '../layout/layout-state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  pwd: string;
  message: string;
  show = false;
  layoutState: LayoutState;

  constructor(
    private router: Router,
    private auth: AuthProvider,
    private layoutProvider: LayoutProvider
  ) {
  }

  ngOnInit() {
    this.layoutProvider.layoutState.subscribe(layoutState => {
      this.layoutState = layoutState;
    });

    this.auth.user.subscribe(user => {
      if (user) {
        this.router.navigate([this.layoutState.activeSection.activePath]);
      } else {
        this.show = true;
      }
    });
  }

  login() {
    this.auth.login(this.email, this.pwd)
    .catch(err => {
      this.message = err.message;
    });
  }

}
