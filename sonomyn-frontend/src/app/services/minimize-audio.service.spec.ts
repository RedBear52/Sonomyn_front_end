import { TestBed } from '@angular/core/testing';

import { MinimizeAudioService } from './minimize-audio.service';

describe('MinimizeAudioService', () => {
  let service: MinimizeAudioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MinimizeAudioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
