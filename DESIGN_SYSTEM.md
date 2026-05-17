# Crealtiva Studio — Design System Reference
> Documento técnico de diseño. Leer antes de tocar cualquier componente visual.
> Última actualización: 2026-05-17

---

## 1. Filosofía visual

**Palabras clave:** íntimo · editorial · atemporal · respira · confía  
**Lo que debe evocar:** un libro de fotografía de lujo, no un catálogo de servicios  
**Lo que debe evitar:** exceso de texto, elementos que compiten entre sí, colores saturados, bordes duros en masa

La referencia principal de *espacio y ritmo* es **maldonadodaniel.com** — secciones amplias, tipografía que no compite con la fotografía, elementos que "respiran". El visitante debe sentir que puede moverse despacio por la página.

---

## 2. Paleta de color

| Token           | Hex       | Uso principal                                                    |
|-----------------|-----------|------------------------------------------------------------------|
| `ink`           | `#1A1416` | Texto principal, fondos oscuros, navbar scrolled                 |
| `cream`         | `#F1E2CF` | Fondos de sección alternos, texto sobre oscuro                   |
| `dusky-rose`    | `#B18093` | Acentos de marca, kickers, bordes ghost, hover states            |
| `rose-deep`     | `#8C5F73` | CTAs primarios (fondo de botón principal)                        |
| `champagne`     | `#C9A87C` | Dividers, números decorativos, íconos check, acentos dorados     |
| `pearl`         | `#E7E3E0` | Bordes suaves, divisores de sección, fondos de cards en reposo   |
| `white`         | `#FFFFFF` | Fondo de cards, secciones de contraste con cream                 |

**Regla de contraste:**
- Texto oscuro sobre: `cream`, `pearl`, `white`
- Texto claro (`cream`) sobre: `ink`, fotos con overlay, secciones de CTA final
- Nunca: texto `ink` sobre `rose-deep` o `dusky-rose`

---

## 3. Tipografía

### Familias
| Rol              | Familia       | Variable CSS              | Uso                                          |
|------------------|---------------|---------------------------|----------------------------------------------|
| Display / Título | Fraunces      | `var(--font-fraunces)`    | H1, H2, nombres de paquetes, citas, números grandes |
| Cuerpo / UI      | Montserrat    | `var(--font-montserrat)`  | Todo el texto corriente, botones, kickers, FAQs |
| Firma de marca   | Alex Brush    | `var(--font-alex)`        | Solo el logotipo en NavBar                   |

### Escala tipográfica

| Elemento          | Tamaño                        | Peso     | Familia      | Notas                              |
|-------------------|-------------------------------|----------|--------------|------------------------------------|
| Hero H1           | `clamp(2.25rem, 5.5vw, 4.25rem)` | 500   | Fraunces     | line-height 1.1, `pre-line` para saltos |
| Section H2        | `clamp(1.65rem, 3vw, 2.15rem)` | 500     | Fraunces     | line-height 1.15                   |
| Card H3           | `1.15rem`                     | 500      | Fraunces     | line-height snug                   |
| Kicker            | `0.6875rem` (11px)            | 600      | Montserrat   | uppercase, tracking `0.22em`       |
| Cuerpo            | `14px`                        | 400      | Montserrat   | line-height 1.8                    |
| Cuerpo pequeño    | `13px`                        | 400      | Montserrat   | line-height 1.72, items de listas  |
| Botón SM          | `10.5px`                      | 600      | Montserrat   | uppercase, tracking `0.14em`       |
| Botón MD          | `11px`                        | 600      | Montserrat   | uppercase, tracking `0.14em`       |
| Botón LG          | `11.5px`                      | 600      | Montserrat   | uppercase, tracking `0.14em`       |
| Precio grande     | `2.2rem`                      | 500      | Fraunces     | leading-none                       |
| Números decorativos| `text-xl` a `text-3xl`       | 500      | Fraunces     | color `champagne/40–50`, select-none|

**Regla:** Fraunces para lo que el ojo debe ver primero. Montserrat para lo que el ojo debe leer después.

---

## 4. Botones

### Referencia estética
**hugoquishpebodasyeventos.com** — bordes redondeados (pill o semi-pill), no bordes duros cuadrados.

### Bordes: ROUNDED, no square
Todos los botones deben usar `rounded-full` (pill completo) en tamaños SM/MD o `rounded-sm` mínimo en LG.  
**Cambio pendiente en `Button.tsx`:** agregar `rounded-full` a la clase base.

### Variantes

| Variante       | Fondo         | Texto        | Borde                  | Uso                                    |
|----------------|---------------|--------------|------------------------|----------------------------------------|
| `primary`      | `rose-deep`   | `cream`      | `border-rose-deep`     | CTA principal, único por sección       |
| `secondary`    | transparente  | `ink`        | `ink/40`               | Acción secundaria sobre fondos claros  |
| `ghost`        | transparente  | `dusky-rose` | `dusky-rose/60`        | Sobre fondos claros (cream/white)      |
| `ghost-light`  | transparente  | `cream/80`   | `cream/30`             | Sobre fondos oscuros (bg-ink)          |

### Tamaños

| Tamaño | Padding           | Min-width  | Contexto                          |
|--------|-------------------|------------|-----------------------------------|
| `sm`   | `px-6 py-2.5`     | 140px      | Cards de paquetes                 |
| `md`   | `px-8 py-3.5`     | 160px      | Secciones interiores              |
| `lg`   | `px-10 py-4`      | 180px      | Hero, CTA final                   |

**Regla de pares de botones:** cuando aparecen dos botones juntos, `gap-4` entre ellos, `primary` siempre a la izquierda o arriba.

---

## 5. Espaciado y ritmo vertical

### Referencia
**maldonadodaniel.com** — secciones con aire, no saturadas. El visitante necesita "pausas visuales".

### Escala de secciones
| Contexto                   | Padding vertical          |
|----------------------------|---------------------------|
| Sección principal          | `py-24 lg:py-32`          |
| Sección CTA final          | `py-24 lg:py-28`          |
| FAQ / texto denso          | `py-24 lg:py-28`          |
| Hero                       | `min-h-[92vh]`, `py-40` contenido |

### Entre elementos dentro de sección
- Kicker → Título H2: `mt-3`
- Título H2 → Divider: `mt-4`
- Divider → Subtítulo/body: `mt-5`
- SectionHeader → Contenido de sección: `mt-12` a `mt-16`
- Entre cards en grid: `gap-6` a `gap-8`
- Entre ítems de lista: `space-y-4` a `space-y-7`

**Regla de respiración:** si dos elementos del mismo tipo quedan a menos de `1rem` de distancia visual, hay un problema de densidad.

---

## 6. Grid y layout de imágenes

### Referencia
**fotografiadebodasfal.com** — distribución de imágenes en grid multi-columna, mezcla de ratios.

### Patrones aprobados de grid fotográfico

**Tarjetas de servicio (homepage):**
- `3 columnas` desktop (`repeat(3, 1fr)`), `2 col` tablet, `1 col` mobile
- Aspect ratio `3/4` (portrait) — SIEMPRE portrait para fotos de servicios
- Gradient overlay: `linear-gradient(to top, rgba(26,20,22,0.88) 0%, rgba(26,20,22,0.15) 50%, transparent 100%)`
- Texto posicionado en `absolute bottom-0` con padding `p-6`

**Grid de portafolio:**
- Mezcla de `portrait (3/4)` + `landscape (16/6)` para romper ritmo
- Masonry visual: columnas de igual ancho pero fotos de altura variable
- Sin border-radius en fotos — las fotos van al borde (no redondeadas)

**Collage de marca (sección "Sobre nosotros"):**
- 3 fotos en alturas diferentes como composición libre
- `grid-cols-2` con foto principal más alta a la izquierda

**Regla:** las fotos NO tienen `border-radius`. Son rectangulares. El redondeo es solo para botones.

---

## 7. Animaciones y movimiento

### Referencia
**che-vivi.com/bodas/** — scroll-triggered reveals, transiciones suaves, parallax sutil.

### Principios de animación
- **Entrada en scroll:** `initial: { opacity: 0, y: 24 }` → `animate: { opacity: 1, y: 0 }`, `duration: 0.6`, `viewport: { once: true, margin: "-80px" }`
- **Stagger en listas/grids:** delay incremental de `0.09s` por elemento, máximo `0.5s` total
- **Hero reveals:** stagger manual con delays `0.05, 0.18, 0.32, 0.38, 0.5, 1.2`
- **Ease estándar:** `[0.22, 1, 0.36, 1]` (ease-out fuerte, sensación orgánica)
- **Hover en botones:** `scale: 1.015` (mínimo, no exagerado)
- **Hover en tarjetas foto:** `scale: 1.03` en la imagen interna (no en el contenedor)

### Qué NO hacer
- `bounce`, `elastic`, `spring` exagerado — se ve barato
- Animaciones en loop infinito excepto: scroll indicator, shimmer de carga
- Transiciones > 0.8s en elementos de UI
- `whileHover` en elementos de texto plano

---

## 8. Reseñas de Google (elemento pendiente)

### Referencia
**hugoquishpebodasyeventos.com** — reseñas de Google visibles y llamativas, generan confianza inmediata.

### Especificación de implementación
- **Posición:** sección propia entre "Portafolio" y CTA final en homepage, O justo después de los paquetes en páginas de servicio
- **Estilo visual:** cards con foto de perfil del reseñador, nombre, estrellas (★★★★★ en champagne), extracto de texto, fecha
- **Fondo de la sección:** `bg-cream/20` o `bg-white`
- **Fuente de datos:** Google Places API (requiere `GOOGLE_PLACES_API_KEY`) O embed manual de las mejores 4-6 reseñas como dato estático
- **Implementación recomendada:** dato estático primero (4-5 reseñas curatorializadas), luego API si escala
- **Cantidad:** mostrar 4-6 reseñas en grid `2-col` desktop, `1-col` mobile

---

## 9. NavBar

- Altura: `h-16 lg:h-20`
- Estado inicial (sobre hero): `bg-transparent`, texto `cream` o `ink` según foto
- Estado scrolled (>40px): `bg-white/95 backdrop-blur-sm shadow-sm`
- Logo: `Alex Brush`, `text-2xl`, siempre `text-ink`
- Links: `.kicker` (Montserrat 600, 11px, uppercase, tracking 0.22em)
- CTA en navbar: `Button size="sm" variant="primary"` — siempre visible desktop

---

## 10. Componentes de sección — patrones aprobados

### SectionHeader
```
[kicker en dusky-rose]
[H2 en Fraunces]     mt-3
[divider champagne]  mt-4 (48px ancho, 1px alto)
[subtitle 14px]      mt-5 max-w-[52ch]
```
Alineación: `center` para secciones principales / `left` para columnas en grid 2-col.

### Divider champagne
- `width: 3rem` (48px), `height: 1px`, `background: #C9A87C`
- Siempre presente entre kicker/título y subtítulo/contenido
- En secciones centradas: `mx-auto`

### Lista de servicios numerada
- Número: `Fraunces text-xl champagne/50 font-medium w-6 flex-shrink-0`
- Ítem: `Montserrat 14px ink/80`, separado por `border-b border-pearl pb-4`

### Differentiators (columna vertical izquierda)
- Barra vertical: `w-px bg-champagne self-stretch`
- Título: `Montserrat 600 13px uppercase tracking-[0.1em]`
- Cuerpo: `Montserrat 14px ink/65 leading-[1.75]`

### PackageCard
- Border: `border-pearl` (normal) / `border-dusky-rose/50` (featured)
- Featured badge: posición `-top-3.5`, `bg-dusky-rose text-cream`
- Featured accent: `h-px gradient from-dusky-rose via-champagne to-dusky-rose`
- Precio: `Fraunces 2.2rem font-medium`
- CTA: `Button size="sm"` — `primary` si featured, `secondary` si normal

### CTA Final (sección bg-ink)
- Fondo: `bg-ink`
- Título: `Fraunces clamp(1.85rem, 3.5vw, 2.6rem) cream`
- Kicker: `champagne`
- Body text: `cream/65`
- Botón primario: `primary`
- Botón secundario: `ghost-light` (NUNCA `ghost` sobre bg-ink)

---

## 11. Decisiones pendientes de implementación (prioridad)

1. **Botones pill/rounded** — agregar `rounded-full` a `Button.tsx` (referencia: hugoquishpe)
2. **Sección Google Reviews** — implementar con data estática (4-5 reseñas) en homepage
3. **Animaciones de scroll tipo che-vivi** — revisar si parallax sutil en hero image mejora profundidad
4. **Portafolio masonry** — implementar en `/portafolio` con grid de masonry real (columnas CSS o library)
5. **Chat AI page-aware** — Vercel AI SDK + claude-haiku-4-5-20251001 (ya planeado)

---

## 12. Sitios de referencia consolidados

| Site                                | Qué tomar de ahí                              |
|-------------------------------------|-----------------------------------------------|
| `che-vivi.com/bodas/`               | Animaciones de scroll, parallax, movimiento editorial |
| `fotografiadebodasfal.com`          | Grid multi-columna de imágenes, distribución fotográfica |
| `hugoquishpebodasyeventos.com`      | Botones pill/redondeados, Google reviews vistosos |
| `maldonadodaniel.com`               | Espacios amplios, tipografía que respira, minimalismo |
| `danielriveraphotographer.com`      | Posicionamiento de valor, referencias de calidad |
| `lizpinto.net`                      | Calidez de marca, uso de acentos dorados/champagne |
| `crealtivastudio.com` (WordPress)   | Referencia de contenido y servicios existentes |

---

## 13. Qué NO pertenece a este design system

- Código específico de implementación (eso va en los componentes)
- URLs de imágenes de WordPress (eso va en los archivos de data)
- Lógica de negocio (paquetes, precios, FAQs)
- Configuración de Next.js / Tailwind

---

*Este documento es la fuente de verdad visual del proyecto. Cualquier decisión de diseño no cubierta aquí debe discutirse antes de implementarse, no después.*
