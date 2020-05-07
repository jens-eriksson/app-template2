export interface LayoutState {
    mobileView: boolean;
    showSidebar: boolean;
    activePath: string;
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
    pages: Page[];
}

export interface SectionGroupState {
    id: string;
    hidden: boolean;
}

export interface Page {
    id: string;
    paths: string[];
    name: string;
    closeable: boolean;
}

export const DEFAULT_LAYOUT_STATE: LayoutState = {
    mobileView: false,
    showSidebar: true,
    activePath: '/section-one/page-one',
    sectionOne: {
        id: '/section-one',
        activePath: '/section-one/page-one',
        pages: [
            {
                id: '/section-one/page-one',
                name: 'Page One',
                paths: ['/section-one/page-one'],
                closeable: false
            },
            {
                id: '/section-one/page-two/2',
                name: 'Page Two/2',
                paths: ['/section-one/page-two/2'],
                closeable: true
            },
            {
                id: 'section-one/page-two/3',
                name: 'Page Two/3',
                paths: ['/section-one/page-two/3'],
                closeable: true
            },
            {
                id: '/section-one/page-two/4',
                name: 'Page Two/4',
                paths: ['/section-one/page-two/4'],
                closeable: true
            },
            {
                id: '/section-one/page-two/5',
                name: 'Page Two/5',
                paths: ['/section-one/page-two/5'],
                closeable: true
            },
            {
                id: '/section-one/page-two/6',
                name: 'Page Two/6',
                paths: ['/section-one/page-two/6'],
                closeable: true
            }
        ]
    },
    sectionTwo: {
        id: '/section-two',
        activePath: '/section-two/page-three',
        pages: [
            {
                id: '/section-two/page-three',
                name: 'Page Three',
                paths: ['/section-two/page-three'],
                closeable: false
            },
            {
                id: '/section-two/page-four/4',
                name: 'Page Four/4',
                paths: ['/section-two/page-four/4'],
                closeable: true
            }
        ]
    },
    sectionThree: {
        id: '/section-three',
        activePath: '/section-three/page-three',
        pages: [
            {
                id: '/section-three/page-three',
                name: 'Page Three',
                paths: ['/section-three/page-three'],
                closeable: false
            },
            {
                id: '/section-three/page-four/4',
                name: 'Page Four/4',
                paths: ['/section-three/page-four/4'],
                closeable: true
            }
        ]
    },
    profile: {
        id: '/profile',
        activePath: '/profile/profile-page',
        pages: [
            {
                id: '/profile/profile-page',
                name: 'My Profile',
                paths: [
                    '/profile/profile-page',
                    '/profile/edit-profile',
                    '/profile/change-password'
                ],
                closeable: false
            }
        ]
    },
    settings: {
        id: '/settings',
        activePath: '/settings/users',
        pages: [
            {
                id: '/settings/users',
                name: 'Users',
                paths: ['/settings/users'],
                closeable: false
            }
        ]
    },
    groupOne: {
        id: 'group-one',
        hidden: false
    }
};


