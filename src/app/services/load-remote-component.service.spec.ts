import { TestBed } from '@angular/core/testing';

import { LoadRemoteComponentService } from '@services/load-remote-component.service';

describe('LoadRemoteComponentService', () => {
  let service: LoadRemoteComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadRemoteComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
