# AHD Distribuidora — Sitio Web

Sitio web de presentación para **AHD Distribuidora**, empresa mayorista de armazones oftálmicos en México.

## 🔗 Links
- 🌐 Sitio web: [ahddistribuidora.com](https://ahddistribuidora.com)
- 📷 Instagram: [@ahd_distribuidora](https://www.instagram.com/ahd_distribuidora)
- 👤 Facebook: [AHD distribuidora](https://www.facebook.com/AHDdistribuidora)

## 🛠️ Tecnologías
- HTML5
- CSS3 (Vanilla CSS con design system completo)
- JavaScript vanilla (sin frameworks)

## 📁 Estructura
```
ahd-distribuidora/
├── index.html          # Página principal
├── productos.html      # Catálogo de 18 armazones
├── css/styles.css      # Estilos globales
├── js/
│   ├── data.js         # ← DATOS DE PRODUCTOS (editar aquí)
│   ├── main.js         # Lógica general
│   └── productos.js    # Catálogo y modal
├── images/
│   ├── logo/
│   ├── hero/
│   └── productos/
└── db/
    ├── schema.sql      # Tablas MySQL 8.0
    └── seed.sql        # Datos iniciales
```

## 🚀 Inicio rápido
1. Clona el repositorio
2. Abre `index.html` en tu navegador (doble clic, o VS Code Live Server)
3. No requiere servidor ni instalación

## 📦 Para agregar/editar productos
Edita el archivo `js/data.js` — ahí están todos los 18 productos.
Lee `COLABORADORES.txt` para instrucciones detalladas.

## 🗄️ Base de datos
MySQL 8.0 (GoDaddy phpMyAdmin)
- `db/schema.sql` — Crear tablas
- `db/seed.sql` — Cargar datos iniciales

## 📸 Imágenes de productos
Las fotos de armazones se suben a `images/productos/` con el formato:
- `ahd-001-1.jpg` (imagen principal)
- `ahd-001-2.jpg` (imagen secundaria)

Luego actualiza `imagen1` e `imagen2` en `js/data.js`.

---
© 2025 AHD Distribuidora. Todos los derechos reservados.
