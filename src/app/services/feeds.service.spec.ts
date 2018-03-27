import { TestBed, inject } from '@angular/core/testing';

import { FeedsService } from './feeds.service';
import { HttpClientModule } from '@angular/common/http';

describe('FeedsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeedsService],
      imports: [
        HttpClientModule
      ]
    });
  });

  it('should be created', inject([FeedsService], (service: FeedsService) => {
    expect(service).toBeTruthy();
  }));
});
