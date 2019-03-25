/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LoadDataService } from './load-data.service';

describe('Service: LoadData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadDataService]
    });
  });
  it('should ...', inject([LoadDataService], (service: LoadDataService) => {
    expect(service).toBeTruthy();
  }));
});
