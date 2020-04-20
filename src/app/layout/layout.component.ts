import { LayoutState, SectionState, SectionGroupState } from './layout-state';
import { LayoutProvider } from './layout.provider';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  layoutState: LayoutState;

  constructor(
    private layoutProvider: LayoutProvider
  ) {
    this.layoutProvider.layoutState.subscribe(layoutState => {
      this.layoutState = layoutState;
    });
  }

  ngOnInit() {
  }

  toggleSidebar() {
    this.layoutProvider.toggleSidebar();
  }

  openSection(section: SectionState) {
    this.layoutProvider.openSection(section);
  }

  toggleGroup(group: SectionGroupState) {
    this.layoutProvider.toggleSectionGroup(group);
  }

}
