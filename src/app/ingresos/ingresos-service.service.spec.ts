import { TestBed } from '@angular/core/testing';

import { IngresosServiceService } from './ingresos-service.service';

describe('IngresosServiceService', () => {
  let service: IngresosServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IngresosServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
