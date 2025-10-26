# Informe del Proyecto: Tienda de Equipamiento de Gimnasio "Crossfit"

- Autor: Hugo Hincapie
- Fecha: 25 de octubre de 2025
- Asignatura: Desarrollo Web (o proyecto universitario)
- Repositorio: https://github.com/Hugo98759/crossfit

## Resumen

Este informe describe el proyecto "Crossfit": una tienda web de equipamiento de gimnasio desarrollada con Next.js (App Router), TypeScript, Tailwind CSS y un servidor de API simple en Express. El propósito del proyecto es demostrar conocimientos prácticos en tecnologías web modernas, arquitectura cliente/servidor y despliegue local de aplicaciones full-stack.

## Objetivos

- Implementar una interfaz de usuario responsiva para listar productos (máquinas, mancuernas, proteína, accesorios).
- Construir una API ligera que sirva datos de productos y permita operaciones básicas de carrito (simulada en memoria).
- Usar TypeScript para tipado estático y mejorar la mantenibilidad.
- Aplicar Tailwind CSS para estilado rápido y consistente.

## Alcance

El proyecto cubre:

- Página principal con hero y descripción del negocio.
- Página de catálogo con filtrado por categoría.
- Componentes reutilizables: Header, Footer, ProductCard, CategoryFilter, CartModal.
- Contexto de carrito (`context/CartContext.tsx`) para manejar estado global del carrito en cliente.
- API en `server/index.ts` (Express, en memoria) y endpoints Next.js (`app/api/products/route.ts`) según la estructura del proyecto.

## Tecnologías utilizadas

- Next.js (App Router) — UI y routing.
- TypeScript — tipado estático.
- Tailwind CSS — utilidades CSS.
- Express (ts-node-dev para desarrollo) — API en memoria.
- Concurrently — para ejecutar servidor Next y servidor API en paralelo durante desarrollo.

## Estructura del repositorio

Estructura principal del proyecto (resumen):

- `app/` — rutas del lado del cliente/servidor con App Router (páginas: `/`, `/catalog`, APIs).
- `components/` — componentes React compartidos (Header, Footer, ProductCard, etc.).
- `context/` — contextos React (CartContext).
- `server/` — servidor Express (API en memoria) para endpoints adicionales.
- `public/` — imágenes públicas y recursos estáticos.
- `types/` — definiciones TypeScript para `Product`, `CartItem`, etc.
- `package.json` — scripts y dependencias.

Explora el árbol completo para detalles adicionales.

## Arquitectura y diseño

La aplicación sigue una arquitectura simple cliente/servidor pensada para desarrollo local:

- Cliente: Next.js + React. Usa componentes tanto de servidor como clientes según sea necesario. El estado del carrito se maneja con React Context y se almacena en memoria del navegador.
- API local: Express sirve como fuente de datos de productos en memoria; también existen rutas API dentro de Next.js para integración directa.

Principios de diseño:

- Componentización: UI dividida en componentes pequeños y reutilizables.
- Tipado: todos los modelos principales están tipados (TypeScript) para prevenir errores en tiempo de compilación.
- Estilado: Tailwind para consistencia y rapidez en prototipado.

## Componentes clave

- `Header.tsx` — navegación y acceso al carrito.
- `Footer.tsx` — información de pie de página.
- `ProductCard.tsx` — tarjeta que muestra imagen, título, precio y botón para agregar al carrito.
- `CategoryFilter.tsx` — selección de categorías para filtrar el catálogo.
- `CartModal.tsx` — modal simplificado para revisar/editar el carrito.

## Endpoints y API

Principales rutas implementadas:

- `GET /api/products` — devuelve la lista de productos (Next.js API route y/o Express según la configuración).
- (Express) `GET /products` — endpoint equivalente en el servidor Express local en `server/index.ts`.

Nota: La API es de propósito educativo y usa almacenamiento en memoria; no es persistente.

## Cómo ejecutar el proyecto (desarrollo)

Requisitos previos: Node.js y npm instalados.

1. Instalar dependencias:

```powershell
npm install
```

2. Ejecutar en modo desarrollo (ejecuta Next y el servidor Express en paralelo):

```powershell
npm run dev
```

Esto levanta Next.js (por defecto en http://localhost:3000) y el servidor API en http://localhost:4000 (configurable).

Si aparece un error de lock o puerto en uso, cerrar procesos previos de `node` o eliminar el archivo `.next/dev/lock` y volver a intentar.

## Uso y pruebas

- Abrir `http://localhost:3000` en el navegador.
- Ir a `/catalog` para ver los productos y usar el filtro por categorías.
- Probar agregar productos al carrito; el estado del carrito es local y no se persiste.

## Consideraciones y problemas conocidos

- El servidor Express y Next.js se ejecutan en procesos separados; en producción convendría integrar la API como rutas internas o usar una base de datos persistente.
- La API en memoria no persiste datos entre reinicios.
- Ver advertencia sobre `turbopack.root` si el repositorio contiene lockfiles múltiples. Esto es solo informativo para Turbopack.

## Trabajo futuro y mejoras posibles

- Persistencia: integrar una base de datos (SQLite, Postgres o MongoDB).
- Autenticación de usuarios y gestión de pedidos.
- Tests automatizados (unitarios e2e).
- Optimización de imágenes (usar `next/image` y generar versiones WebP/AVIF).
- Preparar despliegue (Vercel/Render) y CI/CD.

## Conclusión

El proyecto "Crossfit" es un prototipo educativo que demuestra cómo construir una tienda web básica con Next.js y TypeScript, integrando una API local. El código está organizado con componentes reutilizables y un enfoque pragmático para el desarrollo rápido.

---

Informe preparado por: Hugo Hincapie

Fecha de entrega: 25/10/2025

Repositorio: https://github.com/Hugo98759/crossfit
