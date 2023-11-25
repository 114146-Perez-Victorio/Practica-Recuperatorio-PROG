import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Factura } from './detail-factura';

@Injectable({
  providedIn: 'root'
})
export class FacturacionService {
  private facturaCreadaSource = new BehaviorSubject<any>(null);
  facturaCreada$ = this.facturaCreadaSource.asObservable();

  constructor() { }

  enviarFacturaCreada(factura:Factura){
    console.log('Enviando factura creada al servicio de comunicación:', factura);
    this.facturaCreadaSource.next(factura)
  }
}

