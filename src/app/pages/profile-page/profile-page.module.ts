import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfilePageComponent } from './profile-page.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

@NgModule({
  declarations: [
    ProfilePageComponent,
    EditProfileComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ProfilePageComponent,
    EditProfileComponent,
    ChangePasswordComponent
  ],
  providers: [
  ]
})
export class ProfilePageModule { }
