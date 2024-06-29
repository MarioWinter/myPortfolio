import { TestBed } from '@angular/core/testing';

import { MyprojectListService } from './myproject-list.service';

describe('MyprojectListService', () => {
  let service: MyprojectListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyprojectListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
