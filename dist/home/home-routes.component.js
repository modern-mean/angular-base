import { HomeComponent } from './home.component';
var headerconf = {
    title: 'Home'
};
export var HomeRoutes = [
    {
        path: 'home',
        component: HomeComponent,
        data: {
            header: headerconf,
            navigation: {
                display: 'Home',
                icon: 'home'
            }
        }
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
//# sourceMappingURL=/home/athroener/vscode/angular-base/home/home-routes.component.js.map