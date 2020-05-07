import { EditUserComponent } from './../pages/users/edit-user/edit-user.component';
import { AuthGuard } from './../auth/auth-guard.provider';
import { ProfilePageComponent } from './../pages/profile-page/profile-page.component';
import { ChangePasswordComponent } from './../pages/profile-page/change-password/change-password.component';
import { EditProfileComponent } from './../pages/profile-page/edit-profile/edit-profile.component';
import { PageFourComponent } from './../pages/page-four/page-four.component';
import { PageThreeComponent } from './../pages/page-three/page-three.component';
import { PageTwoComponent } from './../pages/page-two/page-two.component';
import { PageOneComponent } from './../pages/page-one/page-one.component';
import { LayoutComponent } from './layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from '../pages/users/users.component';

export const ROUTES: Routes = [
  { path: 'section-one',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'page-one', pathMatch: 'full' },
      { path: 'page-one', component: PageOneComponent, data: { name: 'Page One', closable: true } },
      { path: 'page-two/:id', component: PageTwoComponent }
    ]
  },
  { path: 'section-two',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'page-three', pathMatch: 'full' },
      { path: 'page-three', component: PageThreeComponent },
      { path: 'page-four/:id', component: PageFourComponent }
    ]
  },
  { path: 'section-three',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'page-three', pathMatch: 'full' },
      { path: 'page-three', component: PageThreeComponent },
      { path: 'page-four/:id', component: PageFourComponent }
    ]
  },
  { path: 'profile',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'profile-page', pathMatch: 'full' },
      { path: 'profile-page', component: ProfilePageComponent },
      { path: 'edit-profile', component: EditProfileComponent },
      { path: 'change-password', component: ChangePasswordComponent }
    ]
  },
  { path: 'settings',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'users', pathMatch: 'full' },
      { path: 'users', component: UsersComponent },
      { path: 'users/:id', component: EditUserComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
