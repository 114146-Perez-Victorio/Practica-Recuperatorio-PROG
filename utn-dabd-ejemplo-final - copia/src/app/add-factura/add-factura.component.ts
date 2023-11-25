import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Factura } from '../detail-factura';
import { RestService } from '../rest.service';
import { FacturacionService } from '../facturacion.service';

@Component({
  selector: 'ef-add-factura',
  templateUrl: './add-factura.component.html',
  styleUrls: ['./add-factura.component.css']
})
export class AddFacturaComponent {
  facturaForm!:FormGroup

  constructor(private fb:FormBuilder, private service:RestService, private facturacion:FacturacionService){
    this.facturaForm = this.fb.group({
      createdDate:[Date],
      clientName:[""],
      tpe:[""]
    })
  }

  guardarFactura(): void {
    let nuevaFactura: Factura = {
      id: "",
      createdDate: this.facturaForm.get('createdDate')?.value,
      clientName: this.facturaForm.get('clientName')?.value,
      tpe: this.facturaForm.get('tpe')?.value,
      details: [],
    };
  
    console.log(nuevaFactura);
  
    this.service.postFactura(nuevaFactura).subscribe(
      (response) => {
        console.log(response);
        console.log("factura guardada");
  
        // Asignar la ID de la factura creada
        nuevaFactura.id = response.id;
  
        // Después de que la factura se ha guardado correctamente,
        // enviarla a través del servicio de facturación.
        this.facturacion.enviarFacturaCreada(nuevaFactura);
      },
      (error) => {
        console.log("Error");
      }
    );
  }
  

}
