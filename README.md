# Studio Ghibli Films - Examen Final React

Aplicación web que muestra las películas de Studio Ghibli consumiendo la API de Ghibli, desarrollada con React + Vite, Zustand para estado global y React Router para navegación.

## 🚀 Tecnologías Utilizadas

- **React** - Biblioteca para interfaces de usuario
- **Vite** - Herramienta de construcción rápida
- **Zustand** - Manejo de estado global
- **React Router** - Enrutamiento y navegación
- **Bootstrap / React Bootstrap** - Estilos y componentes UI
- **Ghibli API** - API pública de películas de Studio Ghibli

## 📁 Estructura del Proyecto
```
src/
├── components/
│   ├── Card.jsx           # Tarjeta individual de película
│   ├── CardList.jsx       # Lista de tarjetas
│   └── Header.jsx         # Barra de navegación
├── layouts/
│   └── RootLayout.jsx     # Layout principal con Header
├── pages/
│   ├── Home.jsx           # Página de inicio con featured films
│   ├── Entities.jsx       # Listado completo con paginación
│   └── Contact.jsx        # Formulario de contacto
├── store/
│   └── store.js           # Configuración de Zustand
├── App.jsx                # Configuración de rutas
└── main.jsx               # Punto de entrada
```

## 🛠️ Instalación y Configuración

### Prerrequisitos

- Node.js (versión 16 o superior)
- npm o yarn

### Pasos para crear el proyecto desde cero

1. **Crear el proyecto con Vite:**
```bash
npx create-vite@latest examen-ghibli --template react
```

2. **Entrar al directorio:**
```bash
cd examen-ghibli
```

3. **Instalar dependencias base:**
```bash
npm install
```

4. **Instalar librerías adicionales:**
```bash
npm install zustand react-router-dom bootstrap react-bootstrap
```

5. **Crear la estructura de carpetas** dentro de `src/`:
   - `components`
   - `layouts`
   - `pages`
   - `store`

6. **Ejecutar el proyecto:**
```bash
npm run dev
```

El proyecto estará disponible en `http://localhost:5173`

## 📦 Clonar y Ejecutar el Proyecto

### Clonar el repositorio
```bash
git clone https://github.com/TU_USUARIO/examen-ghibli.git
```

### Entrar al directorio
```bash
cd examen-ghibli
```

### Instalar dependencias
```bash
npm install
```

### Ejecutar en modo desarrollo
```bash
npm run dev
```

### Compilar para producción
```bash
npm run build
```

## 🌐 API Utilizada

**Ghibli API**: https://ghibliapi.vercel.app

- Endpoint: `https://ghibliapi.vercel.app/films`
- No requiere API key
- Retorna información de películas de Studio Ghibli con imágenes, directores, años y ratings

## 📄 Funcionalidades

### Página Home (`/`)
- Hero section con título
- Muestra las primeras 6 películas del store de Zustand
- Los datos se comparten desde la página Films

### Página Films (`/entities`)
- Fetch a la API de Ghibli
- Guarda los datos en Zustand
- Muestra 12 películas por página
- Paginación con botones Previous/Next
- Spinner de carga mientras se obtienen los datos

### Página Contact (`/contact`)
- Formulario con campos: Name, Email, Message
- Validación en todos los campos (required)
- Mensaje de éxito al enviar
- Se limpia automáticamente después de enviar

## 🔄 Uso de Zustand

El estado global se maneja con Zustand en `src/store/store.js`:
```javascript
import { create } from 'zustand';

export const useStore = create((set) => ({
  films: [],
  setFilms: (films) => set({ films }),
}));
```

**Uso en páginas:**
- **Entities**: Hace fetch y guarda en el store con `setFilms()`
- **Home**: Lee del store con `useStore((state) => state.films)` y muestra las primeras 6

## 🚀 Deploy

### Netlify

1. Sube tu código a GitHub
2. Ve a [netlify.com](https://netlify.com) e inicia sesión
3. Click en **"Add new site"** → **"Import an existing project"**
4. Selecciona tu repositorio
5. Configuración:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click en **"Deploy site"**

### Vercel

1. Sube tu código a GitHub
2. Ve a [vercel.com](https://vercel.com)
3. Importa tu repositorio
4. Deploy automático

## 👨‍💻 Autor

**Haziel** - Estudiante de Tecsup

## 📝 Notas

- Proyecto desarrollado como examen final
- Tiempo estimado de desarrollo: 75 minutos
- Cumple con todos los requisitos: Zustand en 2+ páginas, React Router con layouts, consumo de API, paginación y formulario validado
