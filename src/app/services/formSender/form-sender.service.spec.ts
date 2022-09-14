import { TestBed } from '@angular/core/testing';

import { FormSenderService } from './form-sender.service';

describe('FormSenderService', () => {
  let service: FormSenderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormSenderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
