import { Page } from '../pages/page';

export interface LayoutState {
    mobileView: boolean;
    sidebarHidden: boolean;
    activeSection: SectionState;
    sectionOne: SectionState;
    sectionTwo: SectionState;
    sectionThree: SectionState;
    profile: SectionState;
    settings: SectionState;
    groupOne: SectionGroupState;
}

export interface SectionState {
    id: string;
    activePath: string;
    openPages: Page[];
}

export interface SectionGroupState {
    id: string;
    hidden: boolean;
}

export const DEFAULT_LAYOUT_STATE: LayoutState = {
    mobileView: false,
    sidebarHidden: false,
    activeSection: {
        id: 'section-two',
        activePath: '/section-two/page-three',
        openPages: [
            {
                name: 'Page Three',
                path: '/section-two/page-three',
                closeable: false
            },
            {
                name: 'Page Four/4',
                path: '/section-two/page-four/4',
                closeable: true
            }
        ]
    },
    sectionOne: {
        id: 'section-one',
        activePath: '/section-one/page-one',
        openPages: [
            {
                name: 'Page One',
                path: '/section-one/page-one',
                closeable: false
            },
            {
                name: 'Page Two/2',
                path: '/section-one/page-two/2',
                closeable: true
            },
            {
                name: 'Page Two/3',
                path: '/section-one/page-two/3',
                closeable: true
            },
            {
                name: 'Page Two/4',
                path: '/section-one/page-two/4',
                closeable: true
            },
            {
                name: 'Page Two/5',
                path: '/section-one/page-two/5',
                closeable: true
            },
            {
                name: 'Page Two/6',
                path: '/section-one/page-two/6',
                closeable: true
            }
        ]
    },
    sectionTwo: {
        id: 'section-two',
        activePath: '/section-two/page-three',
        openPages: [
            {
                name: 'Page Three',
                path: '/section-two/page-three',
                closeable: false
            },
            {
                name: 'Page Four/4',
                path: '/section-two/page-four/4',
                closeable: true
            }
        ]
    },
    sectionThree: {
        id: 'section-three',
        activePath: '/section-three/page-three',
        openPages: [
            {
                name: 'Page Three',
                path: '/section-three/page-three',
                closeable: false
            },
            {
                name: 'Page Four/4',
                path: '/section-three/page-four/4',
                closeable: true
            }
        ]
    },
    profile: {
        id: 'profile',
        activePath: '/profile/profile-page',
        openPages: [
            {
                name: 'My Profile',
                path: '/profile/profile-page',
                closeable: false
            }
        ]
    },
    settings: {
        id: 'settings',
        activePath: '/settings/users',
        openPages: [
            {
                name: 'Users',
                path: '/settings/users',
                closeable: false
            }
        ]
    },
    groupOne: {
        id: 'group-one',
        hidden: false
    }
};


