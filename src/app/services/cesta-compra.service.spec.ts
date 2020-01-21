import { TestBed } from '@angular/core/testing';

import { CestaCompraService } from './cesta-compra.service';

describe('CestaCompraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CestaCompraService = TestBed.get(CestaCompraService);
    expect(service).toBeTruthy();
  });
});
