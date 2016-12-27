/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { RouteNavListComponent } from './route-nav-list.component';
describe('RouteNavListComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [RouteNavListComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(RouteNavListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/home/athroener/vscode/angular-base/navigation-list/navigation-list.component.spec.js.map