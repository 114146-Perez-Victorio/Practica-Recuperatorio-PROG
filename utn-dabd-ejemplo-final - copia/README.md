# EjemploFinal

## Descripción

Esta es una App para listar y crear nuevas facturas.

## Se pide

### 1 - Menú de navegación

Mostrar 2 Botones.

- Listar
- Agregar Factura

### 2 - Listar

Se pide un listado de facturas, se debe listar, `fecha de creación`, `nombre y apellido del cliente o razón social`, `tipo de factura`, `total`. Una columna con acciónes: `Ver detalle` y `Agregar Detalle`

#### Acciones

- Ver Detalle: Se deberá desplegar un Accordion (https://getbootstrap.com/docs/5.0/components/accordion/) debajo del registro con el detalle de las facturas (una tabla que muestre `nombre de producto`, `cantidad`, `precio unitario`, `subtotal`)
- Agregar Detalle: Mostrar el formulario de edición de factura donde se permitirá agregar un nuevo detalle a la factura.

### 3 - Agregar Factura

Mostrar un formulario donde se podrá crear una nueva factura completando los campos esperados.

- Fecha (requerido, debe ser mayor a hoy)
- Cliente o Razon Social (requerido, mínimo 10 caracteres)
- Tipo de Factura (A, B, C) (Enumerado, requerido)
  - A aplica una alícuota de 7 %
  - B aplica una alícuota de 10,5 %
  - C aplíca una alícuota de 21 %


### 4 - Cargar Detalle

En el momento de cargar el detalle de facturas, debemos mostrar un formulario con

- Nombre de Producto (requerido, mínimo 15 caracteres)
- Cantidad de Items (requerido, mayor a 0, menor que 10)
- Precio unitario (requerido, mayor a 0)

## Condiciones Técnicas

- Formulario para agregar, cuando se presiona `Guardar` se de mostar automáticamente el formulario de agregar detalle.
- En el formulario de detalle, se deberán mostrar 3 botones
  - `Cancelar`, el cual cancela y vuelve al listado.
  - `Guardar y continuar`, el cual guarda los datos y muestra nuevamente el formulario para cargar otro detalle
  - `Guardar y salir`, el cual debe guardar los datos y volver al listado de Facturas
- El valor total de la factura que se muestra en el Listado debe ser calculado entre los valores detalle (multiplico cantidad de items por precio unitario), y luego se aplica el valor de alícuota.
- El formulario de `Nueva Factura` debe ser Template Driven.
- El formulario de `Detalle de Factura` debe ser Reactive Form.
- Las rutas esperadas son:
  - `invoices` - Lista las facturas
  - `invoices/new` - Agrega una nueva
  - `invoices/add-detail/59e05f26-5830-48c9-825b-4704b9cb5969` - Agrega un detalle
- Los IDs son auto generados en el Servicio Front.

### BackEnd

- Para levantar el backend se deberá tener instalado `json-server` (`npm install -g json-server`)
- Luego ejecutar la siguiente sentencia: `json-server --watch data/db.json`
- Endpoints:
- Obtener todas las Facturas `GET http://localhost:3000/invoices`

```JSON
[
    {
        "id": "59e05f26-5830-48c9-825b-4704b9cb5969",
        "createdDate": "2023-10-20",
        "clientName": "Panificadora del Valle S.A.",
        "tpe": "A",
        "details": [
            {
                "id": "bc1b18f7-fccf-4770-9139-e5b3ee6cec75",
                "productName": "Harina por bolsa de 50kg",
                "amount": 2,
                "price": 15000
            }
        ]
    },
    {
        "id": "90d3ee46-667e-453e-89a9-7281454b9ea6",
        "createdDate": "2023-10-22",
        "clientName": "Juan de los Palotes",
        "tpe": "A",
        "details": [
            {
                "id": "627bb923-e30e-4d7b-a486-b5d943ee2c72",
                "productName": "Café Molido por Caja 'La Virginia' (Pack 50 bolsas)",
                "amount": 5,
                "price": 10000
            }
        ]
    }
]
```

- Obtener una Factura `GET http://localhost:3000/invoices/59e05f26-5830-48c9-825b-4704b9cb5969`

``` JSON
{
    "id": "59e05f26-5830-48c9-825b-4704b9cb5969",
    "createdDate": "2023-10-20",
    "clientName": "Panificadora del Valle S.A.",
    "tpe": "A",
    "details": [
        {
            "id": "bc1b18f7-fccf-4770-9139-e5b3ee6cec75",
            "productName": "Harina por bolsa de 50kg",
            "amount": 2,
            "price": 15000
        }
    ]
}
```

- Crear una nueva Factura: `POST http://localhost:3000/invoices`

``` JSON
{
    "id": "7f5b19bf-71f8-4979-a44e-091745f93fc7",
    "createdDate": "2023-10-22",
    "clientName": "Cliente Mocked",
    "tpe": "B",
    "details": []
}
```

- Actualizar una Factura: `PUT http://localhost:3000/invoices/7f5b19bf-71f8-4979-a44e-091745f93fc7`

``` JSON
{
    "id": "7f5b19bf-71f8-4979-a44e-091745f93fc7",
    "createdDate": "2023-10-22",
    "clientName": "Cliente Mocked",
    "tpe": "B",
    "details": [
        {
            "id": "67a58b4b-4c1c-41f9-9cab-c66c38ac413f",
            "productName": "Producto Mocked",
            "amount": 3,
            "price": 5000
        }
    ]
}
```