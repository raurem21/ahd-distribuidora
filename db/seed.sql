-- ============================================================
-- AHD Distribuidora — Datos de Ejemplo (seed.sql)
-- Archivo: seed.sql
-- Descripción: Inserta los 18 productos del catálogo inicial
-- Ejecutar DESPUÉS de schema.sql
-- ============================================================

USE ahd_distribuidora;

-- Limpiar tabla antes de insertar (opcional en desarrollo)
-- TRUNCATE TABLE productos;

INSERT INTO productos
  (slug, modelo, tipo, material, color, genero, medidas, descripcion, disponible, imagen_1, imagen_2, orden)
VALUES
  ('ahd-001', 'AHD-001', 'Armazón Oftálmico', 'Acetato',  'Negro',              'Unisex', '52-18-140',
   'Armazón clásico de acetato negro con acabado mate. Diseño rectangular atemporal, ideal para ópticas que buscan un modelo versátil y de alta rotación.',
   1, 'images/productos/placeholder_acetato.jpg', 'images/productos/placeholder_acetato.jpg', 1),

  ('ahd-002', 'AHD-002', 'Armazón Oftálmico', 'Metal',    'Dorado',             'Mujer',  '50-16-135',
   'Elegante armazón metálico en tono dorado con bisagra de resorte. Forma semi-redonda que realza los rasgos femeninos. Acabado premium antioxidante.',
   1, 'images/productos/placeholder_metal.jpg',   'images/productos/placeholder_metal.jpg',   2),

  ('ahd-003', 'AHD-003', 'Armazón Oftálmico', 'TR-90',    'Azul Marino',        'Hombre', '54-17-145',
   'Armazón ultraligero de TR-90 en azul marino. Material flexible y resistente a impactos, ideal para uso prolongado.',
   1, 'images/productos/placeholder_tr90.jpg',    'images/productos/placeholder_tr90.jpg',    3),

  ('ahd-004', 'AHD-004', 'Armazón Oftálmico', 'Acetato',  'Carey',              'Unisex', '51-18-138',
   'Diseño clásico en acetato carey con venas naturales. El patrón único de cada pieza lo convierte en un accesorio exclusivo.',
   1, 'images/productos/placeholder_acetato.jpg', 'images/productos/placeholder_acetato.jpg', 4),

  ('ahd-005', 'AHD-005', 'Armazón Oftálmico', 'Metal',    'Plateado',           'Hombre', '53-17-140',
   'Armazón metálico plateado de perfil delgado con diseño minimalista. Puente de doble barra para mayor estabilidad.',
   1, 'images/productos/placeholder_metal.jpg',   'images/productos/placeholder_metal.jpg',   5),

  ('ahd-006', 'AHD-006', 'Armazón Oftálmico', 'Acetato',  'Rojo',               'Mujer',  '50-15-135',
   'Armazón de acetato en rojo vibrante con forma cat-eye. Diseño atrevido y moderno que combina con looks casuales y formales.',
   1, 'images/productos/placeholder_acetato.jpg', 'images/productos/placeholder_acetato.jpg', 6),

  ('ahd-007', 'AHD-007', 'Armazón Oftálmico Infantil', 'TR-90', 'Negro con detalle rojo', 'Niño', '46-15-125',
   'Armazón infantil de TR-90 flexible e irrompible. Diseñado para niños en edad escolar. Puntas de varilla en goma suave antideslizante.',
   1, 'images/productos/placeholder_ninos.jpg',   'images/productos/placeholder_ninos.jpg',   7),

  ('ahd-008', 'AHD-008', 'Armazón Oftálmico', 'Metal',    'Bronce',             'Unisex', '52-18-140',
   'Armazón metálico en acabado bronce con forma cuadrada elegante. La combinación de tono cálido con diseño geométrico genera un look sofisticado.',
   1, 'images/productos/placeholder_metal.jpg',   'images/productos/placeholder_metal.jpg',   8),

  ('ahd-009', 'AHD-009', 'Armazón Oftálmico', 'Acetato',  'Cristal / Transparente', 'Mujer', '51-16-138',
   'Armazón de acetato transparente con efecto cristal. Tendencia de moda actual que combina con cualquier atuendo y tono de piel.',
   1, 'images/productos/placeholder_acetato.jpg', 'images/productos/placeholder_acetato.jpg', 9),

  ('ahd-010', 'AHD-010', 'Armazón Oftálmico', 'Metal',    'Negro mate',         'Hombre', '54-18-145',
   'Armazón metálico en negro mate de gran calibre. Diseño robusto con apariencia moderna y masculina.',
   1, 'images/productos/placeholder_metal.jpg',   'images/productos/placeholder_metal.jpg',   10),

  ('ahd-011', 'AHD-011', 'Armazón Oftálmico', 'TR-90',    'Verde olivo',        'Unisex', '52-17-140',
   'Armazón TR-90 en verde olivo, color en tendencia en el mercado óptico actual. Ultraligero y de alta resistencia.',
   1, 'images/productos/placeholder_tr90.jpg',    'images/productos/placeholder_tr90.jpg',    11),

  ('ahd-012', 'AHD-012', 'Armazón Oftálmico', 'Acetato',  'Gris humo',          'Hombre', '53-17-142',
   'Armazón de acetato en gris humo con corte angular. Diseño ejecutivo de alta gama, ideal para el entorno profesional.',
   1, 'images/productos/placeholder_acetato.jpg', 'images/productos/placeholder_acetato.jpg', 12),

  ('ahd-013', 'AHD-013', 'Armazón Oftálmico', 'Metal',    'Rosa gold',          'Mujer',  '49-16-130',
   'Armazón metálico en rosa gold con forma ovalada. El tono rose gold es uno de los favoritos del mercado femenino.',
   1, 'images/productos/placeholder_metal.jpg',   'images/productos/placeholder_metal.jpg',   13),

  ('ahd-014', 'AHD-014', 'Armazón Oftálmico', 'Acetato',  'Azul cobalto',       'Unisex', '52-18-140',
   'Armazón de acetato en azul cobalto intenso. Especial para clientes jóvenes o con estilo vanguardista.',
   1, 'images/productos/placeholder_acetato.jpg', 'images/productos/placeholder_acetato.jpg', 14),

  ('ahd-015', 'AHD-015', 'Armazón Oftálmico', 'TR-90',    'Carey caramelo',     'Mujer',  '50-16-135',
   'Armazón TR-90 en carey caramelo de tonos cálidos. Combina la durabilidad del TR-90 con la estética del acetato tradicional.',
   1, 'images/productos/placeholder_tr90.jpg',    'images/productos/placeholder_tr90.jpg',    15),

  ('ahd-016', 'AHD-016', 'Armazón Oftálmico', 'Titanio',  'Titanio natural',    'Hombre', '55-18-145',
   'Armazón de titanio puro, el material más ligero y resistente para armazones oftálmicos. Hipoalergénico.',
   1, 'images/productos/placeholder_metal.jpg',   'images/productos/placeholder_metal.jpg',   16),

  ('ahd-017', 'AHD-017', 'Armazón Oftálmico', 'Acetato',  'Beige / Nude',       'Mujer',  '50-16-135',
   'Armazón de acetato en tono beige nude de moda actual. El color nude es extremadamente versátil. Diseño redondo que suaviza los rasgos.',
   1, 'images/productos/placeholder_acetato.jpg', 'images/productos/placeholder_acetato.jpg', 17),

  ('ahd-018', 'AHD-018', 'Armazón Oftálmico Infantil', 'TR-90', 'Azul / Rojo',  'Niño',   '45-14-120',
   'Armazón infantil TR-90 en combinación azul y rojo. Diseño dinámico para niños de 4 a 10 años. Varillas con punta de goma.',
   1, 'images/productos/placeholder_ninos.jpg',   'images/productos/placeholder_ninos.jpg',   18)

ON DUPLICATE KEY UPDATE
  modelo      = VALUES(modelo),
  tipo        = VALUES(tipo),
  material    = VALUES(material),
  color       = VALUES(color),
  genero      = VALUES(genero),
  medidas     = VALUES(medidas),
  descripcion = VALUES(descripcion),
  disponible  = VALUES(disponible),
  orden       = VALUES(orden);

-- Verificar la carga
SELECT id, slug, modelo, material, genero, disponible FROM productos ORDER BY orden;
