/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';
import { ModernMeanModule } from '../modern-mean.module';
describe('FooterComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            imports: [ModernMeanModule]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(FooterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/home/athroener/vscode/angular-base/footer/footer.component.spec.js.map