import { LayoutState } from './../layout-state';
import { LayoutProvider } from './../layout.provider';
import { Component, OnInit, HostListener } from '@angular/core';
import { Page } from '../../pages/page';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  private readonly TAB_WIDTH = 200;
  private tabsComponent: HTMLElement;
  layoutState: LayoutState;
  activePath: string;
  pages: Page[];
  tabs: Page[] = [];
  tabsDropdown: Page[] = [];
  showTabsDropdown = false;

  constructor(private layoutProvider: LayoutProvider) {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.arrangeTabs();
  }

  ngOnInit() {
    this.tabsComponent = document.getElementById('tabs');
    this.layoutProvider.layoutState.subscribe(layoutState => {
      this.layoutState = layoutState;
      this.activePath = layoutState.activeSection.activePath;
      this.pages = layoutState.activeSection.openPages;
      this.arrangeTabs();
    });
  }

  open(page: Page) {
    this.layoutProvider.openPage(page.path, page.name, page.closeable);
  }

  close(page: Page) {
    this.layoutProvider.closePage(page.path);
  }

  togglePageMenu() {
    this.showTabsDropdown = !this.showTabsDropdown;
  }

  toggleSidebar() {
    this.layoutProvider.toggleSidebar();
  }

  arrangeTabs() {
    const width = this.tabsComponent.clientWidth;
    const visbaleCount = Math.floor(width / (this.TAB_WIDTH));
    if (visbaleCount < this.pages.length) {
      this.tabs = this.pages.slice(0, visbaleCount);
      this.tabsDropdown = [];
      for (const openTab of this.pages) {
        if (!this.tabs.find(t => t.path === openTab.path)) {
          this.tabsDropdown.push(openTab);
        }
      }
    } else {
      this.tabs = this.pages.slice(0, this.pages.length);
      this.tabsDropdown = [];
    }
    this.showTabsDropdown = false;
  }
}
