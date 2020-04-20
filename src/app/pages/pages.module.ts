import { ProfilePageComponent } from './profile-page/profile-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { PageThreeComponent } from './page-three/page-three.component';
import { PageFourComponent } from './page-four/page-four.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    PageOneComponent,
    PageTwoComponent,
    PageThreeComponent,
    PageFourComponent,
    UsersComponent,
    ProfilePageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PageOneComponent,
    PageTwoComponent,
    PageThreeComponent,
    PageFourComponent,
    UsersComponent,
    ProfilePageComponent
  ],
  providers: [
  ]
})
export class PagesModule { }
