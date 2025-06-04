import { TestBed } from '@angular/core/testing';

import { AngularWrapperService } from './angular-wrapper.service';

describe('AngularWrapperService', () => {
  let service: AngularWrapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularWrapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
