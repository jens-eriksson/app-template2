import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { PageThreeComponent } from './page-three/page-three.component';
import { PageFourComponent } from './page-four/page-four.component';
import { UsersComponent } from './users/users.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';

@NgModule({
  declarations: [
    PageOneComponent,
    PageTwoComponent,
    PageThreeComponent,
    PageFourComponent,
    UsersComponent,
    EditUserComponent
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
    UsersComponent
  ],
  providers: [
  ]
})
export class PagesModule { }
