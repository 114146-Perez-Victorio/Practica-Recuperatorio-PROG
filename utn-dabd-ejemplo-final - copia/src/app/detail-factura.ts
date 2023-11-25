export class Factura {
    id:string = "";
    createdDate:Date | null = null;
    clientName:string = "";
    tpe:string = "";
    details: DetailFactura[] = []
}

export class DetailFactura {
    productName = "";
    amount = 0;
    price = 0;
}
