import { AuthGuard } from './../auth/auth-guard.provider';
import { ProfilePageComponent } from './../pages/profile-page/profile-page.component';
import { PageFourComponent } from './../pages/page-four/page-four.component';
import { PageThreeComponent } from './../pages/page-three/page-three.component';
import { PageTwoComponent } from './../pages/page-two/page-two.component';
import { PageOneComponent } from './../pages/page-one/page-one.component';
import { LayoutComponent } from './layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from '../pages/users/users.component';

const routes: Routes = [
  { path: 'section-one',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'page-one', pathMatch: 'full' },
      { path: 'page-one', component: PageOneComponent },
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
  { path: 'profile',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'profile-page', pathMatch: 'full' },
      { path: 'profile-page', component: ProfilePageComponent }
    ]
  },
  { path: 'settings',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'users', pathMatch: 'full' },
      { path: 'users', component: UsersComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
