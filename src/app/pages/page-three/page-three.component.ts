import { ModalProvider } from './../../layout/modal.provider';
import { Router } from '@angular/router';
import { LayoutProvider } from './../../layout/layout.provider';
import { Page } from './../../layout/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-three',
  templateUrl: './page-three.component.html',
  styleUrls: ['./page-three.component.scss']
})
export class PageThreeComponent implements OnInit {

  constructor(
    private router: Router,
    private layout: LayoutProvider,
    private modal: ModalProvider
    ) {
  }

  ngOnInit() {
    const page: Page = {
      id: this.router.url,
      name: 'Page Three',
      closeable: false,
      paths: [this.router.url]
    };
    this.layout.registerPage(page);
  }

  open() {
    this.modal.confirm('PageThreeComponent', () => {
      console.log('confirm');
    });
  }
}
