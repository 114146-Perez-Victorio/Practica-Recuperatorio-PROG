import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DetailFactura, Factura } from './detail-factura';
@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http:HttpClient) { }

  private url = 'http://localhost:3000/invoices';

  public getFactura(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  public actualizarFactura(factura: Factura): Observable<Factura> {
    let facturaId = factura.id; 
    let url = `${this.url}/${facturaId}`;
    return this.http.put<Factura>(url, factura);
  }
  
  public postFactura( factura: Factura){
    return this.http.post<Factura>(this.url,factura);
  }
}
