import { ModalProvider } from './modal.provider';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { PagesModule } from './../pages/pages.module';
import { ProfilePageModule } from './../pages/profile-page/profile-page.module';
import { LayoutProvider } from './layout.provider';
import { LayoutComponent } from './layout.component';
import { TabsComponent } from './tabs/tabs.component';
import { ModalComponent } from './modal/modal.component';
import { ConfirmComponent } from './confirm/confirm.component';

@NgModule({
  declarations: [
    LayoutComponent,
    TabsComponent,
    ModalComponent,
    ConfirmComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    PagesModule,
    ProfilePageModule
  ],
  providers: [
    LayoutProvider,
    ModalProvider
  ]
})
export class LayoutModule { }
