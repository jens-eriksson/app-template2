import { ModalProvider } from './../../layout/modal.provider';
import { PageThreeComponent } from './../page-three/page-three.component';
import { Router } from '@angular/router';
import { LayoutProvider } from './../../layout/layout.provider';
import { Component, OnInit } from '@angular/core';
import { Page } from './../../layout/layout';
@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss']
})
export class PageOneComponent implements OnInit {

  constructor(
    private router: Router,
    private layout: LayoutProvider,
    private modal: ModalProvider
    ) {
  }

  ngOnInit() {
    const page: Page = {
      id: this.router.url,
      name: 'Page One',
      closeable: false,
      paths: [this.router.url]
    };
    this.layout.registerPage(page);
  }

  open() {
    this.modal.open(PageThreeComponent);
  }

  open500x300() {
    this.modal.open(PageThreeComponent, 500, 300);
  }

  confirm() {
    this.modal.confirm('Do you?', this.afterConfirm, this.afterCancel);
  }

  afterConfirm() {
    console.log('confirm');
  }

  afterCancel() {
    console.log('cancel');
  }
}
