/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ImgTailoringService } from './img-tailoring.service';

describe('Service: ImgTailoring', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImgTailoringService]
    });
  });

  it('should ...', inject([ImgTailoringService], (service: ImgTailoringService) => {
    expect(service).toBeTruthy();
  }));
});
