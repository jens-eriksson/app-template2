import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { PagesModule } from './../pages/pages.module';
import { LayoutProvider } from './layout.provider';
import { LayoutComponent } from './layout.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  declarations: [
    LayoutComponent,
    TabsComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    PagesModule
  ],
  providers: [
    LayoutProvider
  ]
})
export class LayoutModule { }
