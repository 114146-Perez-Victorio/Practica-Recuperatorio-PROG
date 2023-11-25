import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListaFacturaComponent } from './lista-factura/lista-factura.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddFacturaComponent } from './add-factura/add-factura.component';
import { DetalleFacturaComponent } from './detalle-factura/detalle-factura.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaFacturaComponent,
    AddFacturaComponent,
    DetalleFacturaComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
