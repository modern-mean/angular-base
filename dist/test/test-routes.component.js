import { TestComponent } from './test.component';
var testconf = {
    title: 'Test',
    titleShow: false,
    rightButtonIcon: 'menu'
};
export var TestRoutes = [
    {
        path: 'test',
        data: {
            header: testconf,
            navigation: {
                display: 'Test'
            }
        },
        children: [
            {
                path: 'ok',
                component: TestComponent,
                data: {
                    header: testconf,
                    navigation: {
                        display: 'Test CHild'
                    }
                }
            },
            { path: '', pathMatch: 'full', redirectTo: 'ok' }
        ]
    }
];
//# sourceMappingURL=/home/athroener/vscode/angular-base/test/test-routes.component.js.map