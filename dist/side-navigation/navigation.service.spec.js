/* tslint:disable:no-unused-variable */
import { TestBed, inject } from '@angular/core/testing';
import { NavigationService } from './navigation.service';
import { ModernMeanModule } from '../modern-mean.module';
describe('NavigationService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            imports: [ModernMeanModule]
        });
    });
    it('should ...', inject([NavigationService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=/home/athroener/vscode/angular-base/side-navigation/navigation.service.spec.js.map