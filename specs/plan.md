# DIV · Digital Partners: plan técnico y calendario

Estado: borrador. Fecha: 27 de noviembre de 2026. Qué debe hacer la web: [spec.md](spec.md).

## 1. Condiciones

- Actualizan la web Viviana y Damaris, en el código, con ayuda de herramientas como Claude Code.
- Coste mensual: cero. El dominio se paga aparte.

## 2. Tecnología

| Pieza | Decisión |
|---|---|
| Web | **React con TypeScript**, a partir de [la maqueta v5](../design/maqueta-v5.html). Ambas socias manejan estas tecnologías |
| Herramienta de construcción | Vite, generando el HTML por adelantado como archivos estáticos |
| Publicación | Cloudflare, plan gratuito |
| Formulario | **Pendiente hasta tener el dominio:** servicio externo o función propia en Cloudflare. Mientras tanto se puede construir el formulario sin envío real |
| Código | Git y GitHub |
| Tipografía | Archivos incluidos en la propia web, sin cargarlos desde Google |

## 3. Por comprobar en la documentación oficial

- Que el plan gratuito de Cloudflare admite uso comercial.
- Si conviene usar Pages o Workers con archivos estáticos para un proyecto nuevo.
- Límites vigentes. Según fuentes de terceros, las páginas estáticas no tienen límite de tráfico y las funciones y publicaciones sí.
- Qué datos tratan los proveedores elegidos, para el aviso de privacidad.

## 4. Calendario

| Cuándo | Qué | Quién |
|---|---|---|
| 30 nov a 4 dic | Elegir y comprar el dominio y crear el correo | Viviana y Damaris |
| 30 nov a 4 dic | Cerrar el plan técnico | Todo el equipo |
| Antes del 11 dic | Cerrar tipografía y ajustes de diseño | Todo el equipo |
| 7 a 18 dic | Construir y probar | Claude Code, con revisión de ambas |
| Antes de publicar | Revisar textos legales y enviar un mensaje de prueba | Todo el equipo |
| Finales de diciembre | Publicar | Todo el equipo |

El mayor riesgo para la fecha es el dominio: sin él no hay correo ni envío del formulario.
