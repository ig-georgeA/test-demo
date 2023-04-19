import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { NorthwindOpenAPIService } from './northwind-open-api.service';

describe('NorthwindOpenAPIService', () => {
  let service: NorthwindOpenAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(NorthwindOpenAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
