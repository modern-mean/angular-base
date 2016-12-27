/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { ModernMeanModule } from '../modern-mean.module';
describe('HeaderComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            imports: [ModernMeanModule]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/home/athroener/vscode/angular-base/header/header.component.spec.js.map