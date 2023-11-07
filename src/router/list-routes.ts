export interface RouterLink {
    name: string;
    path: string;
    title: string;
}

export const RouterLinks: RouterLink[] = [
    { path: '/', name: 'home', title: 'Home'},
    { path: '/about', name: 'about', title: 'About'}
]