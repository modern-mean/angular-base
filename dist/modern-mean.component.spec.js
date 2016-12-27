/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { ModernMeanComponent } from './modern-mean.component';
describe('ModernMeanComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ModernMeanComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ModernMeanComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/home/athroener/vscode/angular-base/modern-mean.component.spec.js.map