import { Router, NavigationEnd } from '@angular/router';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Page } from '../pages/page';

@Injectable()
export abstract class PageProvider {
    private SECTION;
    private DEFAULT_PAGES: Page[];
    private DEFAULT_ACTIVE_PAGE: Page;
    private PAGES_STORAGE_KEY;
    private ACTIVE_PAGE_STORAGE_KEY;

    private _activePage: Page;
    private _pages: Page[];
    public pages: BehaviorSubject<Page[]>;
    public activePage: BehaviorSubject<Page>;

    constructor(
        protected router: Router,
        SECTION: string,
        DEFAULT_PAGES: Page[],
        DEFAULT_ACTIVE_PAGE: Page,
    ) {
        this.SECTION = SECTION;
        this.DEFAULT_PAGES = DEFAULT_PAGES;
        this.DEFAULT_ACTIVE_PAGE = DEFAULT_ACTIVE_PAGE;

        this.PAGES_STORAGE_KEY = SECTION + '-pages';
        this.ACTIVE_PAGE_STORAGE_KEY = SECTION + '-active-page';

        this.load();

        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                const section = this.getSection(event.urlAfterRedirects);
                if (section === this.SECTION) {
                    if (event.urlAfterRedirects !== this._activePage.path) {
                        this.open(event.urlAfterRedirects);
                    }
                }
            }
        });
    }

    public open(path: string, name: string = path, closeable: boolean = true) {
        const section = this.getSection(path);
        if (section === this.SECTION) {
            this.router.navigate([path]).then(() => {
                let page = this._pages.find(p => p.path === path);
                if (!page) {
                    page = new Page({ name, path, closeable});
                    this._pages.push(page);
                    this.pages.next(this._pages);
                } else {
                    if (name !== path) {
                        page.name = name;
                    }
                    page.closeable = closeable;
                }
                this._activePage = page;
                this.activePage.next(this._activePage);
                this.save();
            });
        } else {
            console.log('Wrong section');
        }
    }

    public close(path: string) {
        const index = this._pages.findIndex(p => p.path === path);
        const section = this.getSection(path);

        if (index > -1 && this.SECTION === section) {
            let navigateToIndex = index - 1;
            if (navigateToIndex < 0) {
                navigateToIndex = 0;
            }
            this._pages.splice(index, 1);
            this.pages.next(this._pages);

            this._activePage = this._pages.find(p => p.path === this._pages[navigateToIndex].path) ;
            this.activePage.next(this._activePage);

            this.save();
            this.router.navigate([this._activePage.path]);
        }
    }

    private load() {
        this._pages = JSON.parse(localStorage.getItem(this.PAGES_STORAGE_KEY));
        if (!this._pages) {
            this._pages = this.DEFAULT_PAGES;
        }
        this._activePage = JSON.parse(localStorage.getItem(this.ACTIVE_PAGE_STORAGE_KEY));
        if (!this._activePage) {
            this._activePage = this.DEFAULT_ACTIVE_PAGE;
        }

        this.pages = new BehaviorSubject<Page[]>(this._pages);
        this.activePage = new BehaviorSubject<Page>(this._activePage);
    }

    private save() {
        localStorage.setItem(this.PAGES_STORAGE_KEY, JSON.stringify(this._pages));
        localStorage.setItem(this.ACTIVE_PAGE_STORAGE_KEY, JSON.stringify(this._activePage));
    }

    private getSection(path: string): string {
        let section = null;
        const segments = path.split('/');
        if (segments.length > 1) {
            section = segments[1];
        }
        return section;
    }

}
