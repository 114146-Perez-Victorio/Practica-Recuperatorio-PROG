import { Component, OnInit } from "@angular/core";
import { RestService } from "../rest.service";
import { ListFacturaService } from "../list-factura.service";
import { DetailFactura, Factura } from "../detail-factura";
import { FormBuilder, FormGroup } from "@angular/forms";
@Component({
  selector: "ef-lista-factura",
  templateUrl: "./lista-factura.component.html",
  styleUrls: ["./lista-factura.component.css"],
})
export class ListaFacturaComponent implements OnInit {
  detalleForm!: FormGroup;
  facturaArray: Factura[] = [];
  detailArray:DetailFactura[] = [];

  expandedFacturaId: string | null = null;

  constructor(
    private rest: RestService,
    private listFactura: ListFacturaService,
    private fb:FormBuilder
  ) {
    this.detalleForm = fb.group({
      productName:[''],
      productAmount:[''],
      productPrice:['']
    })


  }

  toggleAccordion(facturaId: string): void {
    this.expandedFacturaId =
      this.expandedFacturaId === facturaId ? null : facturaId;
  }


  getFactura() {
    this.rest.getFactura().subscribe((info: any) => {
      this.facturaArray = info;
    });
    console.log(this.facturaArray);
  }

  calcularTotal(factura: any): number {
    let total = 0;
    factura.details.forEach((detalle: any) => {
      total += detalle.amount * detalle.price;
    });
    return total;
  }

  identificador(facturaID:string){
    let id =  this.facturaArray.some((pedido) => pedido.id == facturaID);
    console.log(id);
    
  }
  
  agregarDetalle(): void {
    if (this.expandedFacturaId !== null) {
      const nuevoDetalle: DetailFactura = {
        productName: this.detalleForm.value.productName,
        amount: this.detalleForm.value.productAmount,
        price: this.detalleForm.value.productPrice,
      };
  
      const facturaIndex = this.facturaArray.findIndex((factura) => factura.id === this.expandedFacturaId);
  
      if (facturaIndex !== -1) {
        this.facturaArray[facturaIndex].details.push(nuevoDetalle);
        this.detalleForm.reset();
  
        // Actualizar la factura en el servidor después de agregar el detalle
        this.rest.actualizarFactura(this.facturaArray[facturaIndex]).subscribe(
          (facturaActualizada) => {
            console.log('Factura actualizada en el servidor:', facturaActualizada);
          },
          (error) => {
            console.error('Error al actualizar la factura:', error);
          }
        );
      } else {
        console.error(`No se encontró la factura con ID ${this.expandedFacturaId}`);
      }
    }
  }
  
  

  ngOnInit(): void {
    this.listFactura.factura$.subscribe((factura) => {
      this.facturaArray = factura;
      this.getFactura();
    });
  }
}
