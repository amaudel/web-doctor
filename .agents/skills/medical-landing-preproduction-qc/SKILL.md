---
name: medical-landing-preproduction-qc
description: Realiza un control de calidad (QC) final y técnico en una landing page médica antes de su despliegue a producción, auditando formatos, estilos, enlaces, visualización en móviles y cumplimiento de sobriedad clínica.
---

# Medical Landing Preproduction QC (Quality Control)

Actúa como especialista senior en Control de Calidad (QA/QC) y Desarrollador Frontend especializado en sitios médicos.

El objetivo de esta Skill es asegurar que una landing page médica esté técnicamente impecable, cumpla con las políticas de privacidad y ética de publicidad en salud, y garantice una experiencia óptima de conversión móvil antes de su publicación en producción.

---

## 1. Validación de Formato Técnico y Marcado
Antes de producción, audita el código fuente para corregir inconsistencias del maquetado:
- **Remover Markdown Residual**: En archivos HTML estáticos, asegúrate de que no existan textos en formato negrita de Markdown (`**texto**`). Deben ser reemplazados siempre por etiquetas semánticas HTML correctas: `<strong>texto</strong>` (o `<b>` si es solo visual).
- **Consistencia de Clases CSS de Botones**: Verifica que todas las clases asociadas a botones de llamada a la acción (ej. `.btn-secondary`, `.btn-primary`) estén debidamente declaradas en el bloque de estilos. Corrige cualquier uso de clase huérfana.
- **URLs de Redes Sociales (Open Graph)**: La etiqueta `<meta property="og:image" content="..." />` debe usar obligatoriamente una **URL absoluta** (que comience con `https://`) y apunte al dominio canónico para asegurar el correcto despliegue al compartir el enlace.

---

## 2. Cumplimiento de Sobriedad y Ética Médica (Copywriting)
Los portales médicos deben evitar la retórica comercial agresiva para no vulnerar regulaciones de publicidad en salud:
- **Suavizar Reclamos Publicitarios (Buzzwords)**: Detecta y reemplaza frases que transmitan promesas exageradas o autoproclamaciones no verificables.
  - *Evitar*: "Alta precisión", "Máxima seguridad", "El mejor personal", "Resultados garantizados".
  - *Sustituir por*: "Tecnología moderna", "Instalaciones equipadas para su seguridad", "Personal calificado de soporte", "Valoración detallada".
- **Integridad de Datos**: Prohibido inventar registros profesionales (SENESCYT/MSP), aseguradoras afiliadas, cargos públicos u horarios específicos a menos de contar con la confirmación oficial del médico.
- **Optimización de Búsqueda Local**: Conserva de forma natural la inserción de las palabras clave principales de SEO local (ej. *"cirujano general en Cuenca"*, *"cirujano laparoscopista en Cuenca"*) en los copys sin sobrecargar el texto.

---

## 3. Optimización Mobile First: Above-the-Fold
La conversión en móviles es crítica. El primer pantallazo visible (antes de hacer scroll) debe comunicar de inmediato el valor del sitio:
- **Información Inmediata**: El paciente debe poder ver claramente en los primeros 3 segundos:
  1. Nombre completo del doctor.
  2. Especialidad médica principal.
  3. Ciudad / Ubicación de atención.
  4. Un botón de contacto directo destacado.
- **Gestión del Layout de la Imagen**:
  - Si el diseño coloca el retrato del doctor como una imagen vertical de gran tamaño, esta puede empujar el texto y los CTAs hacia abajo en celulares, sacándolos del primer pantallazo.
  - *Solución*: En las consultas de medios móviles (`@media (max-width: 1024px)`), utiliza la propiedad CSS de orden (`order: 1` o superior) para que la imagen se renderice **debajo** de las acciones principales y los textos de presentación.

---

## 4. Verificación de Interactividad y Enlaces
Comprueba exhaustivamente que los componentes interactivos estén operativos:
- **Llamadas y WhatsApp**: Los enlaces `tel:+593...` y `https://wa.me/...` deben tener el código de país correcto, no contener caracteres especiales extraños en el número, e incluir mensajes preestablecidos claros y profesionales.
- **Mapa de Ubicación**: El iframe de Google Maps debe cargar correctamente la dirección verificada del consultorio y no mostrar errores de API.
- **Menú y FAQs**:
  - El menú móvil (hamburguesa) debe deslizarse o desplegarse con fluidez, aplicando efectos de desenfoque (`backdrop-filter`) para un acabado premium.
  - El acordeón de FAQs debe abrir un solo elemento a la vez con transiciones de chevron limpias.
  - El botón flotante de WhatsApp y la barra fija de contacto móvil deben tener márgenes (offsets) adecuados para no solaparse entre sí en pantallas de distintos tamaños.
