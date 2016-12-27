/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NavigationService } from './navigation.service';

import { ModernMeanModule } from '../modern-mean.module';

describe('NavigationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ModernMeanModule]
    });
  });

  it('should ...', inject([NavigationService], (service: NavigationService) => {
    expect(service).toBeTruthy();
  }));
});
