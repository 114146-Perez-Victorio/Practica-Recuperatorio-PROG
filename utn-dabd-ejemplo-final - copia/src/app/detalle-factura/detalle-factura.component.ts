import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DetailFactura, Factura } from '../detail-factura';
import { RestService } from '../rest.service';
import { FacturacionService } from '../facturacion.service';

@Component({
  selector: 'ef-detalle-factura',
  templateUrl: './detalle-factura.component.html',
  styleUrls: ['./detalle-factura.component.css']
})
export class DetalleFacturaComponent implements OnInit{
  detalleForm!: FormGroup
  facturaCreada!: Factura;

  constructor(private fb:FormBuilder, private service:RestService, private facturacion:FacturacionService){
    this.detalleForm = this.fb.group({
      productName:[""],
      amount:[0],
      price:[0]
    })
  }

  guardarDetalle() {
    if (this.facturaCreada && this.facturaCreada.id) {
      let nuevoDetalle = {
        productName: this.detalleForm.value.productName,
        amount: this.detalleForm.value.amount,
        price: this.detalleForm.value.price,
      };
  
      // Agregar el detalle a la factura creada
      this.facturaCreada.details.push(nuevoDetalle);
  
      // Actualizar la factura en el servidor
      this.service.actualizarFactura(this.facturaCreada).subscribe(
        (respuesta) => {
          console.log('Factura actualizada:', respuesta);
        },
        (error) => {
          console.error('Error al actualizar factura:', error);
        }
      );
  
      // Limpiar el formulario o realizar cualquier otra acción necesaria
      this.detalleForm.reset();
    } else {
      console.error('No se ha recibido la información válida de la factura creada.');
    }
  }
  
  
ngOnInit(): void {
    this.facturacion.facturaCreada$.subscribe((factura) =>{
      this.facturaCreada = factura
      console.log('Factura recibida en Cargar Detalle:', factura);
    })
}
}
