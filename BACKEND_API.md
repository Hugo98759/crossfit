# Backend API - GymStore

Backend simple sin base de datos para proyecto estudiantil. Almacena datos en memoria (se reinician al reiniciar el servidor).

## Endpoints Disponibles

### Productos

#### GET `/api/products`
Obtiene todos los productos disponibles.

**Respuesta:**
```json
[
  {
    "id": "m01",
    "name": "Máquina multiestación",
    "category": "Máquinas",
    "priceCOP": 4200000,
    "description": "Máquina completa para ejercicios de fuerza",
    "image": "/products/maquina-multiestacion.jfif"
  }
]
```

### Órdenes

#### GET `/api/orders`
Obtiene todas las órdenes registradas.

**Respuesta:**
```json
{
  "success": true,
  "orders": [
    {
      "id": "ORD-00001",
      "items": [...],
      "total": 4200000,
      "customerName": "Cliente Demo",
      "customerEmail": "cliente@gymstore.com",
      "status": "confirmed",
      "createdAt": "2025-11-28T..."
    }
  ]
}
```

#### POST `/api/orders`
Crea una nueva orden.

**Body:**
```json
{
  "items": [
    {
      "productId": "m01",
      "productName": "Máquina multiestación",
      "quantity": 1,
      "pricePerUnit": 4200000
    }
  ],
  "customerName": "Juan Pérez",
  "customerEmail": "juan@example.com"
}
```

**Respuesta:**
```json
{
  "success": true,
  "message": "Orden creada exitosamente",
  "order": {
    "id": "ORD-00001",
    "items": [...],
    "total": 4200000,
    "customerName": "Juan Pérez",
    "customerEmail": "juan@example.com",
    "status": "confirmed",
    "createdAt": "2025-11-28T..."
  }
}
```

#### GET `/api/orders/[id]`
Obtiene una orden específica por ID.

**Parámetros:**
- `id`: ID de la orden (ej: "ORD-00001")

**Respuesta:**
```json
{
  "success": true,
  "order": {
    "id": "ORD-00001",
    "items": [...],
    "total": 4200000,
    "customerName": "Juan Pérez",
    "customerEmail": "juan@example.com",
    "status": "confirmed",
    "createdAt": "2025-11-28T..."
  }
}
```

## Características

- ✅ **Sin base de datos**: Almacenamiento en memoria
- ✅ **API RESTful**: Endpoints organizados y semánticos
- ✅ **Validaciones**: Validación básica de datos de entrada
- ✅ **Formato de respuesta**: JSON con estructura consistente
- ✅ **IDs únicos**: Generación automática de IDs de orden
- ✅ **Estados de orden**: pending, confirmed, completed

## Limitaciones

- Los datos se pierden al reiniciar el servidor (sin persistencia)
- No hay autenticación ni autorización
- No hay paginación en listados
- Capacidad limitada por memoria RAM

## Uso con el Frontend

El frontend ya está integrado con el backend:
- El carrito envía órdenes al backend al finalizar compra
- La página `/orders` muestra el historial de órdenes
- Todo funciona automáticamente con Next.js API Routes

## Desarrollo

```bash
npm run dev
```

El servidor estará disponible en `http://localhost:3000`
