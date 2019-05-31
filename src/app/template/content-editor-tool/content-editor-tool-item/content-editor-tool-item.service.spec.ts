/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ContentEditorToolItemService } from './content-editor-tool-item.service';

describe('Service: ContentEditorToolItem', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContentEditorToolItemService]
    });
  });

  it('should ...', inject([ContentEditorToolItemService], (service: ContentEditorToolItemService) => {
    expect(service).toBeTruthy();
  }));
});
