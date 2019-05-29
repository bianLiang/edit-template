/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EditingAreaItemService } from './editing-area-item.service';

describe('Service: EditingAreaItem', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditingAreaItemService]
    });
  });

  it('should ...', inject([EditingAreaItemService], (service: EditingAreaItemService) => {
    expect(service).toBeTruthy();
  }));
});
