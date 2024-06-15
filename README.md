# HeroesApp

## ¿Qué veremos en este proyecto?

- **SPA (Single Page Application) a profundidad**:
  Exploraremos en detalle cómo construir y manejar una aplicación de una sola página utilizando React.

- **Diferentes temas en la misma aplicación aplicados a diferentes rutas**:
  Aprenderemos a aplicar diferentes estilos y temas en nuestra aplicación según la ruta en la que nos encontremos.

- **Múltiples Routers**:
  Veremos cómo configurar y manejar múltiples routers dentro de una aplicación de React para gestionar diferentes secciones de la misma.

- **Push y Replace en el History**:
  Utilizaremos las funciones `push` y `replace` del objeto `history` para manejar la navegación programáticamente dentro de nuestra aplicación.

- **Leer argumentos por URL**:
  Aprenderemos a leer y manejar los parámetros que se pasan a través de la URL.

- **QueryParams**:
  Veremos cómo trabajar con los parámetros de consulta (query parameters) en la URL para obtener y manejar información adicional.

- **Aplicar filtros utilizando QueryStrings**:
  Implementaremos filtros en nuestra aplicación utilizando los query strings para mejorar la experiencia del usuario.

---

## Protección de rutas

- **Rutas públicas**:
  Configuraremos rutas que pueden ser accedidas por cualquier usuario, independientemente de su estado de autenticación.

- **Rutas privadas**:
  Configuraremos rutas que solo pueden ser accedidas por usuarios autenticados, protegiendo así secciones sensibles de nuestra aplicación.

- **Login y logout - Sin backend aún**:
  Implementaremos un sistema básico de autenticación que permita a los usuarios iniciar y cerrar sesión sin la necesidad de un backend real.

- **Recordar cuál fue la última ruta visitada para mejorar la experiencia de usuario**:
  Implementaremos una funcionalidad para recordar la última ruta visitada por el usuario, mejorando así la experiencia de usuario al volver a la aplicación.

- **Context**:
  Utilizaremos el API de Context de React para manejar el estado global de nuestra aplicación, especialmente en lo que respecta a la autenticación.

- **Reducer**:
  Implementaremos la lógica de manejo de estado utilizando reducers para un mejor manejo y escalabilidad del estado en nuestra aplicación.

Esta es una sección pequeña pero importante para trabajar las bases de la autenticación y protección de nuestra aplicación.

---

## Pruebas Unitarias

- **Nuevos tipos de pruebas**:
  Exploraremos nuevos tipos de pruebas unitarias y de integración para asegurarnos de que nuestra aplicación funciona correctamente.

- **Pruebas en rutas privadas y públicas**:
  Realizaremos pruebas para asegurar que las rutas privadas y públicas se comportan como se espera según el estado de autenticación del usuario.

- **MemoryRouter**:
  Utilizaremos `MemoryRouter` de React Router para realizar pruebas sin necesidad de un navegador real.

- **Pruebas en nuestro DashboardRouter**:
  Escribiremos pruebas específicas para el `DashboardRouter`, asegurando que las rutas internas se comportan correctamente.

- **Pruebas en el AppRouter**:
  Realizaremos pruebas en el `AppRouter` para asegurar que la navegación general de nuestra aplicación funciona correctamente.

- **Simular URLs y segmentos**:
  Aprenderemos a simular diferentes URLs y segmentos dentro de nuestras pruebas para verificar el comportamiento de la aplicación en diferentes escenarios.

- **Simular queryParams y queryStrings**:
  Implementaremos pruebas que simulan el uso de query parameters y query strings para asegurar que nuestra lógica de manejo de filtros y argumentos URL funciona correctamente.

Recuerden que el objetivo de las pruebas es ir probando cosas nuevas cada vez y tener un repertorio completo de diferentes casos.
