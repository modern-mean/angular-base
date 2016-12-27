/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { ModernMeanModule } from '../modern-mean.module';
describe('HomeComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            imports: [ModernMeanModule]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/home/athroener/vscode/angular-base/home/home.component.spec.js.map