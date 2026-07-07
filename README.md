# Angel Riobueno - Portafolio Profesional

Portafolio personal moderno y dinámico de Angel Riobueno, Full Stack Developer, desarrollado con las tecnologías más avanzadas del mercado.

## 🚀 Tecnologías Utilizadas

- **Next.js 14** - Framework React de última generación
- **TypeScript** - Tipado estático para mayor robustez
- **Tailwind CSS** - Framework CSS utility-first
- **Framer Motion** - Animaciones fluidas y profesionales
- **Lucide React** - Iconos modernos y elegantes

## ✨ Características

- ✅ Diseño completamente responsive
- ✅ Animaciones suaves y profesionales
- ✅ Efectos visuales modernos (partículas, gradientes)
- ✅ Navegación fluida con scroll suave
- ✅ Formulario de contacto funcional
- ✅ Optimizado para SEO
- ✅ Rendimiento optimizado

## 📦 Instalación

1. **Instalar dependencias:**
```bash
npm install
```

2. **Ejecutar en modo desarrollo:**
```bash
npm run dev
```

3. **Abrir en el navegador:**
```
http://localhost:3000
```

## 🏗️ Construcción para Producción

```bash
npm run build
npm start
```

## 📁 Estructura del Proyecto

```
angel-riobueno-portfolio/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx             # Página de inicio
│   └── globals.css          # Estilos globales
├── components/
│   ├── Navbar.tsx           # Barra de navegación
│   ├── Hero.tsx             # Sección hero
│   ├── Services.tsx         # Servicios
│   ├── Technologies.tsx     # Tecnologías
│   ├── About.tsx            # Sobre nosotros
│   ├── Contact.tsx          # Formulario de contacto
│   ├── Footer.tsx           # Pie de página
│   └── ParticlesBackground.tsx # Fondo animado
├── public/                  # Archivos estáticos
└── package.json             # Dependencias
```

## 🎨 Personalización

### Colores

Los colores principales se pueden modificar en `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Personaliza los colores aquí
  }
}
```

### Contenido

El contenido de cada sección se puede editar directamente en los componentes correspondientes en la carpeta `components/`.

## 📝 Notas

- El formulario de contacto actualmente muestra una alerta. Para producción, deberás integrarlo con un servicio de backend o un servicio de email como SendGrid, Mailgun, etc.
- Las redes sociales en el footer tienen enlaces de ejemplo. Actualiza los `href` con tus enlaces reales.
- La información de contacto (email, teléfono, ubicación) se puede modificar en el componente `Contact.tsx`.

## 🌐 Despliegue

Este proyecto se puede desplegar fácilmente en:

- **Vercel** (recomendado para Next.js)
- **Netlify**
- **AWS Amplify**
- **Cualquier servidor Node.js**

## 🔗 Exponer con ngrok (Desarrollo/Testing)

Para exponer tu aplicación localmente a internet usando ngrok:

### Método Rápido:

1. **Instala ngrok** desde [https://ngrok.com/download](https://ngrok.com/download)
2. **Crea una cuenta gratuita** en [https://ngrok.com/](https://ngrok.com/)
3. **Autentica ngrok**:
   ```bash
   ngrok config add-authtoken TU_AUTHTOKEN
   ```
4. **Inicia tu aplicación**:
   ```bash
   npm run dev
   ```
5. **En otra terminal, ejecuta ngrok**:
   ```bash
   npm run tunnel
   ```
   O usa el script automatizado:
   ```bash
   # Windows (CMD)
   start-with-ngrok.bat
   
   # Windows (PowerShell)
   .\start-with-ngrok.ps1
   ```

6. **Copia la URL HTTPS** que ngrok te proporciona (ej: `https://abc123.ngrok-free.app`)

📖 **Guía completa**: Ver [NGROK_GUIDE.md](./NGROK_GUIDE.md) para más detalles y opciones avanzadas.

## 📄 Licencia

© 2024 Angel Riobueno. Todos los derechos reservados.

---

Desarrollado con ❤️ por Angel Riobueno

