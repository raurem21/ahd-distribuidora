-- ============================================================
-- AHD Distribuidora — Base de Datos MySQL 8.0
-- Archivo: schema.sql
-- Descripción: Creación de tablas para el sitio web
-- Codificación: utf8mb4 (soporte acentos y emojis)
-- ============================================================

-- Crear (o usar) la base de datos
CREATE DATABASE IF NOT EXISTS ahd_distribuidora
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE ahd_distribuidora;

-- ──────────────────────────────────────────────────────────────
-- Tabla: productos
-- Almacena los armazones del catálogo
-- ──────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS productos (
  id          INT             NOT NULL AUTO_INCREMENT,
  slug        VARCHAR(50)     NOT NULL COMMENT 'Identificador URL-friendly (ej: ahd-001)',
  modelo      VARCHAR(50)     NOT NULL COMMENT 'Nombre del modelo (ej: AHD-001)',
  tipo        VARCHAR(100)    NOT NULL DEFAULT 'Armazón Oftálmico',
  material    VARCHAR(100)    NOT NULL COMMENT 'Acetato | Metal | TR-90 | Titanio | Mixto',
  color       VARCHAR(100)    NOT NULL,
  genero      ENUM(
                'Hombre',
                'Mujer',
                'Unisex',
                'Niño'
              ) NOT NULL DEFAULT 'Unisex',
  medidas     VARCHAR(30)     NOT NULL COMMENT 'Formato: ancho_lente-puente-varilla (ej: 52-18-140)',
  descripcion TEXT            NOT NULL,
  disponible  TINYINT(1)      NOT NULL DEFAULT 1 COMMENT '1 = disponible, 0 = agotado',
  imagen_1    VARCHAR(255)    NOT NULL DEFAULT 'images/productos/placeholder_acetato.jpg',
  imagen_2    VARCHAR(255)    NOT NULL DEFAULT 'images/productos/placeholder_acetato.jpg',
  orden       INT             NOT NULL DEFAULT 0 COMMENT 'Orden de aparición en catálogo',
  created_at  DATETIME        NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at  DATETIME        NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

  PRIMARY KEY (id),
  UNIQUE KEY uq_slug (slug),
  INDEX idx_material  (material),
  INDEX idx_genero    (genero),
  INDEX idx_disponible(disponible),
  INDEX idx_orden     (orden)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
  COMMENT='Catálogo de armazones oftálmicos AHD Distribuidora';

-- ──────────────────────────────────────────────────────────────
-- Tabla: contacto_mensajes
-- Almacena los mensajes enviados desde el formulario del footer
-- ──────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS contacto_mensajes (
  id        INT           NOT NULL AUTO_INCREMENT,
  nombre    VARCHAR(150)  NOT NULL,
  email     VARCHAR(150)  NOT NULL,
  telefono  VARCHAR(25)   NULL     DEFAULT NULL,
  mensaje   TEXT          NOT NULL,
  leido     TINYINT(1)    NOT NULL DEFAULT 0 COMMENT '0 = no leído, 1 = leído',
  fecha     DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP,
  ip_origen VARCHAR(45)   NULL     DEFAULT NULL COMMENT 'IP del remitente (IPv4/IPv6)',

  PRIMARY KEY (id),
  INDEX idx_leido (leido),
  INDEX idx_fecha (fecha)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
  COMMENT='Mensajes recibidos desde el formulario de contacto del sitio';

-- ──────────────────────────────────────────────────────────────
-- Tabla: configuracion_sitio  (opcional, para futura expansión)
-- Permite cambiar textos del sitio desde la BD sin tocar HTML
-- ──────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS configuracion_sitio (
  clave       VARCHAR(80)   NOT NULL COMMENT 'Clave de configuración',
  valor       TEXT          NOT NULL COMMENT 'Valor de la configuración',
  descripcion VARCHAR(255)  NULL     DEFAULT NULL,
  updated_at  DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

  PRIMARY KEY (clave)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
  COMMENT='Configuraciones globales del sitio web';

-- Valores por defecto de configuración
INSERT INTO configuracion_sitio (clave, valor, descripcion) VALUES
  ('whatsapp_numero',  '524792140944',            'Número de WhatsApp con código de país'),
  ('whatsapp_mensaje', 'Hola, me interesa conocer sus armazones', 'Mensaje predeterminado de WhatsApp'),
  ('instagram_url',    'https://www.instagram.com/ahd_distribuidora', 'URL de Instagram'),
  ('facebook_url',     'https://www.facebook.com/AHDdistribuidora',   'URL de Facebook'),
  ('sitio_web',        'https://ahddistribuidora.com',                 'URL del sitio web'),
  ('tagline',          'Armazones directo para tu óptica',             'Frase principal de la marca')
ON DUPLICATE KEY UPDATE valor = VALUES(valor);
