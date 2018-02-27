import { TestBed, inject } from '@angular/core/testing';

import { CustomServiceService } from './custom-service.service';

describe('CustomServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomServiceService]
    });
  });

  it('should be created', inject([CustomServiceService], (service: CustomServiceService) => {
    expect(service).toBeTruthy();
  }));
});
