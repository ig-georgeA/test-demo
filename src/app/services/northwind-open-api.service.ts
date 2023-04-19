import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_ENDPOINT = 'https://data-northwind.indigo.design';

@Injectable({
  providedIn: 'root'
})
export class NorthwindOpenAPIService {
  constructor(
    private http: HttpClient
  ) { }

  public getCustomerInputModel(): Observable<any> {
    const options = {
      headers: {
        Authorization: 'Bearer <auth_value>',
      },
    };
    return this.http.get(`${API_ENDPOINT}/Customer`, options);
  }

  public postCustomerInputModel(data: any): Observable<any> {
    const options = {
      headers: {
        Authorization: 'Bearer <auth_value>',
      },
    };
    const body = data;
    return this.http.post(`${API_ENDPOINT}/Customer`, body, options);
  }

  public putCustomerInputModel(data: any): Observable<any> {
    const options = {
      headers: {
        Authorization: 'Bearer <auth_value>',
      },
    };
    const body = data;
    return this.http.put(`${API_ENDPOINT}/Customer`, body, options);
  }

  public deleteCustomerInputModel(id: string): Observable<any> {
    const options = {
      headers: {
        Authorization: 'Bearer <auth_value>',
      },
    };
    return this.http.delete(`${API_ENDPOINT}/Customer/${id}`, options);
  }
}
