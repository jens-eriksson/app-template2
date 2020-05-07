import { LayoutProvider } from './../../layout/layout.provider';
import { Page } from './../../layout/layout';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-four',
  templateUrl: './page-four.component.html',
  styleUrls: ['./page-four.component.scss']
})
export class PageFourComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private layout: LayoutProvider
    ) {
  }

  ngOnInit() {
    if (this.route.snapshot.params.id) {
      const page: Page = {
        id: this.router.url,
        name: 'Page Four/' + this.route.snapshot.params.id,
        closeable: true,
        paths: [this.router.url]
      };
      this.layout.registerPage(page);
    }
  }
}
