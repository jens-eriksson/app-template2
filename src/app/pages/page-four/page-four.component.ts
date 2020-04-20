import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-four',
  templateUrl: './page-four.component.html',
  styleUrls: ['./page-four.component.scss']
})
export class PageFourComponent implements OnInit {
  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
  }
}
