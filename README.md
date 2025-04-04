# TrackFlow Landing Page

Una landing page moderna y atractiva para servicios tecnológicos, construida con Astro y Tailwind CSS. Diseñada con un enfoque en la experiencia de usuario, animaciones fluidas y rendimiento optimizado.

## ✨ Características Principales

- 🎨 Diseño moderno con gradientes y efectos de vidrio
- 🌊 Animaciones suaves con GSAP
- 📱 Diseño totalmente responsive
- 🚀 Rendimiento optimizado con Astro
- 🎯 Componentes modulares y reutilizables
- 🔍 SEO optimizado
- 🌓 Efectos visuales avanzados (blur, gradientes, animaciones)
- 📊 Métricas y estadísticas animadas
- 💬 Carrusel de testimonios automático
- 📝 Formulario de contacto interactivo

## 🎯 Componentes

- `Hero.astro` - Sección principal con animaciones y métricas
- `Services.astro` - Servicios ofrecidos con tarjetas interactivas
- `Stats.astro` - Estadísticas animadas con contador
- `Testimonials.astro` - Carrusel automático de testimonios
- `Contact.astro` - Formulario de contacto con validación
- `Navbar.astro` - Barra de navegación responsive con efectos de scroll

## 🛠️ Tecnologías

- [Astro](https://astro.build) - Framework web con rendimiento excepcional
- [Tailwind CSS](https://tailwindcss.com) - Framework CSS utilitario
- [GSAP](https://greensock.com/gsap/) - Biblioteca de animaciones profesionales
- TypeScript - Tipado estático para mejor desarrollo

## 📋 Requisitos Previos

- Node.js 18.0.0 o superior
- npm 7.0.0 o superior
- Conocimientos básicos de Astro y Tailwind CSS

## 🚀 Inicio Rápido

1. Clona el repositorio:
```bash
git clone [url-del-repositorio]
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📦 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye el proyecto para producción
- `npm run preview` - Vista previa de la versión de producción

## 🎨 Personalización

El proyecto utiliza variables de Tailwind CSS para colores y estilos principales:

```js
// tailwind.config.js
theme: {
  extend: {
    colors: {
      primary: '#...',
      secondary: '#...'
    }
  }
}
```

## 📱 Responsive Design

- Mobile First: Diseñado pensando primero en dispositivos móviles
- Breakpoints:
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px

## 🔧 Estructura del Proyecto

```
src/
├── components/     # Componentes reutilizables
├── layouts/        # Layouts de la aplicación
├── pages/         # Páginas y rutas
├── styles/        # Estilos globales
└── data/          # Datos y configuración
```

## 📝 Licencia

ISC

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor, abre un issue primero para discutir los cambios que te gustaría realizar. 