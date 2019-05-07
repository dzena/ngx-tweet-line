import { TestBed } from '@angular/core/testing';

import { NgxTweetLineService } from './ngx-tweet-line.service';

describe('NgxTweetLineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxTweetLineService = TestBed.get(NgxTweetLineService);
    expect(service).toBeTruthy();
  });
});
