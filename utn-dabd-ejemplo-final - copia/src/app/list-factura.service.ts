import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListFacturaService {

  constructor() { }
  
  private facturaSubject = new BehaviorSubject<any[]>([]);
  factura$: Observable<any[]> = this.facturaSubject.asObservable();

  getFactura(): any[] {
    return this.facturaSubject.value;
  }

  agregarFactura(facturas: any) {
    let factura = this.facturaSubject.value;
    factura.push(facturas);
    this.facturaSubject.next(factura);
  }

  actualizarDetalle(facturas: any) {
    let factura = this.facturaSubject.value;
    factura.push(facturas);
    this.facturaSubject.next(facturas);
  }
}
