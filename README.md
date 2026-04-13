# creceDigital — Sitio Web
**Fundación por los Derechos de NNA en Entornos Digitales · ALC**

---

## Estructura de archivos

```
crecedigital-web/
├── index.html              ← Página principal
├── .htaccess               ← Configuración Apache (velocidad + seguridad)
├── css/
│   └── styles.css          ← Todos los estilos del sitio
├── js/
│   └── main.js             ← Navegación entre secciones
└── assets/
    └── logos/
        ├── logo-principal.svg   ← Logo sobre fondo blanco/claro
        └── logo-negativo.svg    ← Logo sobre fondo oscuro (navy)
```

---

## Cómo subir a un hosting

### Opción A — cPanel / File Manager (Hostinger, GoDaddy, Bluehost)
1. Entra a tu cPanel → **File Manager**
2. Abre la carpeta `public_html`
3. Sube todos los archivos y carpetas (manteniendo la estructura)
4. Asegúrate de que `index.html` quede directamente en `public_html/`

### Opción B — FTP (FileZilla u otro cliente)
1. Conecta con tus credenciales FTP
2. Navega a `public_html/` (o `www/` según el hosting)
3. Arrastra todos los archivos manteniendo la estructura de carpetas

### Opción C — Netlify (gratuito, recomendado)
1. Ve a [netlify.com](https://netlify.com) y crea una cuenta
2. Haz clic en **"Add new site" → "Deploy manually"**
3. Arrastra la carpeta `crecedigital-web/` completa
4. Tu sitio queda publicado en segundos con HTTPS incluido

### Opción D — GitHub Pages (gratuito)
1. Crea un repositorio en GitHub
2. Sube todos los archivos
3. Ve a Settings → Pages → selecciona rama `main`
4. Tu sitio queda en `https://tuusuario.github.io/crecedigital/`

---

## Configuración HTTPS

Una vez que tengas SSL instalado en tu hosting, descomenta las últimas líneas del `.htaccess` para redirigir automáticamente a HTTPS:

```apache
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

---

## Fuentes web

El sitio usa Google Fonts (Syne + DM Sans + DM Mono). Requiere conexión a internet para cargarlas. Si quieres que funcione offline, descarga las fuentes y ajusta el `<link>` en `index.html`.

---

## Contacto técnico

Para dudas sobre la implementación del sitio, contactar al equipo de creceDigital.

**creceDigital** · Fundación sin ánimo de lucro · ALC 2025–2030
