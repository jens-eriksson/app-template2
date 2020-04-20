import { BehaviorSubject } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
import { Injectable } from '@angular/core';
import { Page } from '../pages/page';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { LayoutState, SectionState, DEFAULT_LAYOUT_STATE, SectionGroupState } from './layout-state';

@Injectable()
export class LayoutProvider {
    private readonly LAYOUT_STATE_STORAGE_KEY = 'layout-state';
    private _layoutState: LayoutState;
    public layoutState: BehaviorSubject<LayoutState>;

    constructor(
        private router: Router,
        private breakpointObserver: BreakpointObserver
    ) {
        this.load();
        this.breakpointObserver
        .observe(['(max-width: 768px)'])
        .subscribe((state: BreakpointState) => {
            if (state.matches) {
                this._layoutState.mobileView = true;
                this._layoutState.sidebarHidden = true;
            } else {
                this._layoutState.sidebarHidden = false;
                this._layoutState.mobileView = false;
            }
            this.save();
        });

        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.openPage(event.urlAfterRedirects);
            }
        });
    }

    public save() {
        localStorage.setItem(this.LAYOUT_STATE_STORAGE_KEY, JSON.stringify(this._layoutState));
        this.layoutState.next(this._layoutState);
    }

    public load() {
        const layoutState = JSON.parse(localStorage.getItem(this.LAYOUT_STATE_STORAGE_KEY));
        if (layoutState) {
            this._layoutState =  layoutState;
        } else {
            this._layoutState = DEFAULT_LAYOUT_STATE;
        }

        this.layoutState = new BehaviorSubject<LayoutState>(this._layoutState);
    }

    public openSection(section: SectionState) {
        this._layoutState.activeSection = section;
        this.router.navigate([section.activePath]);
        if (this._layoutState.mobileView) {
            this._layoutState.sidebarHidden = true;
        }
        this.save();
    }

    public openPage(path: string, name: string = path, closeable: boolean = true) {
        const section = this.getSection(path);
        if (!section) {
            return;
        }

        this._layoutState.activeSection = section;
        this.router.navigate([path]).then(() => {
            let page = section.openPages.find(p => p.path === path);
            if (!page) {
                page = new Page({ name, path, closeable});
                section.openPages.push(page);
            } else {
                if (name !== path) {
                    page.name = name;
                }
                page.closeable = closeable;
            }
            section.activePath = page.path;
            this.save();
        });
    }

    public closePage(path: string) {
        const section = this.getSection(path);
        if (!section) {
            return;
        }
        const index = section.openPages.findIndex(p => p.path === path);

        if (index > -1) {
            let navigateToIndex = index - 1;
            if (navigateToIndex < 0) {
                navigateToIndex = 0;
            }
            section.openPages.splice(index, 1);

            if (section.activePath === path) {
                section.activePath = section.openPages[navigateToIndex].path;
                this.router.navigate([section.activePath]);
            }

            this.save();
        }
    }

    public toggleSidebar() {
        this._layoutState.sidebarHidden = !this._layoutState.sidebarHidden;
        this.save();
    }

    public toggleSectionGroup(group: SectionGroupState) {
        group.hidden = !group.hidden;
        this.save();
    }

    private getSection(path: string): SectionState {
        let section = null;
        let sectionPath = null;
        const segments = path.split('/');
        if (segments.length > 1) {
            sectionPath = segments[1];
        }
        if (sectionPath) {
            for (const prop in this._layoutState) {
                if (this._layoutState[prop] && this._layoutState[prop].id === sectionPath) {
                    section = this._layoutState[prop];
                    return section;
                }
            }
        }
        return section;
    }
}

