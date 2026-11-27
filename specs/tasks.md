# DIV · Digital Partners: tareas

Fecha: 27 de noviembre de 2026. Objetivo: publicar a finales de diciembre de 2026.
Contenido: [spec.md](spec.md). Tecnología y calendario: [plan.md](plan.md).

"Responsable" está sin asignar donde hay que repartir el trabajo entre Viviana y Damaris. Una tarea se marca cuando se cumple su comprobación.

## Fase 1: gestiones y decisiones (30 nov a 4 dic)

El dominio y el correo condicionan el envío del formulario: conviene empezar por ellos.

| Hecho | N.º | Tarea | Responsable | Depende de | Se comprueba |
|---|---|---|---|---|---|
| [ ] | T02 | Elegir el dominio, revisar marcas parecidas y comprarlo | Sin asignar | Nada | El dominio está a nombre de quien se haya acordado |
| [ ] | T03 | Crear el correo con el dominio propio | Sin asignar | T02 | Ambas reciben un mensaje de prueba |
| [ ] | T04 | Confirmar en la documentación oficial de Cloudflare el uso comercial, los límites y si usar Pages o Workers | Sin asignar | Nada | Decisión anotada en el plan, con enlaces |

## Fase 2: diseño (antes del 11 dic)

| Hecho | N.º | Tarea | Responsable | Depende de | Se comprueba |
|---|---|---|---|---|---|
| [ ] | T05 | Elegir la tipografía y comprobar que su licencia permite incluirla en la web | Ambas | Nada | Fuente y licencia anotadas en el spec |
| [ ] | T06 | Cambiar al menos un rasgo parecido a la plantilla de referencia (halo, flecha de puntos o filas del proceso) | Ambas | T05 | Aprobado por ambas en escritorio y móvil |

## Fase 3: construcción (7 a 18 dic)

| Hecho | N.º | Tarea | Responsable | Depende de | Se comprueba |
|---|---|---|---|---|---|
| [ ] | T07 | Guardar el avance en git y crear el repositorio en GitHub | Sin asignar | Nada | Ambas pueden descargarlo y subir cambios |
| [ ] | T08 | Crear el proyecto con React, TypeScript y Vite, con HTML generado por adelantado | Claude Code | T07 | Se construye sin errores y el HTML generado contiene los textos |
| [ ] | T09 | Definir colores, tipografía incluida en la web y estilos base según las 13 reglas | Claude Code | T05, T08 | Coinciden con el spec y no se cargan fuentes externas |
| [ ] | T10 | Barra superior y pie | Claude Code | T09 | Los enlaces llevan a su sección; en móvil se ve lo indicado |
| [ ] | T11 | Portada | Claude Code | T06, T09 | Textos iguales al spec en escritorio y móvil |
| [ ] | T12 | Servicios, con el catálogo en un solo archivo de datos | Claude Code | T09 | Se ven cuatro servicios; añadir uno solo requiere editar ese archivo y su ilustración |
| [ ] | T13 | Proceso, Nosotras y cierre | Claude Code | T06, T09 | Textos iguales al spec y botón que lleva al formulario |
| [ ] | T14 | Formulario sin envío real: validación, mensajes y casilla de privacidad | Claude Code | T11 | No se acepta con datos incompletos, no borra lo escrito y avisa de que aún no envía |
| [ ] | T15 | Página para el aviso de privacidad y, si corresponde, el aviso legal | Claude Code | T08 | Se abre desde el formulario y el pie |

## Fase 4: envío, textos legales y pruebas

| Hecho | N.º | Tarea | Responsable | Depende de | Se comprueba |
|---|---|---|---|---|---|
| [ ] | T16 | Decidir cómo se envía el formulario | Ambas | T02, T04 | Decisión anotada en el plan |
| [ ] | T17 | Conectar el envío, con protección contra spam | Claude Code | T03, T14, T16 | Un mensaje de prueba llega a ambas y un fallo muestra el aviso de error |
| [ ] | T18 | Redactar los textos legales y que los revise una persona entendida | Sin asignar | T16 | Textos aprobados y publicados en su página |
| [ ] | T19 | Revisar móvil, tableta, escritorio, teclado, contraste y animación reducida | Ambas, con Claude Code | T10 a T15 | Se cumplen los apartados 6 y 9 del spec |

## Fase 5: publicación (finales de diciembre)

| Hecho | N.º | Tarea | Responsable | Depende de | Se comprueba |
|---|---|---|---|---|---|
| [ ] | T20 | Publicar en Cloudflare y conectar el dominio | Claude Code, con acceso dado por vosotras | T02, T04, T19 | La web abre con el dominio y conexión segura |
| [ ] | T21 | Prueba final en la web publicada | Ambas | T17, T18, T20 | Todos los criterios del spec marcados |

T20 puede hacerse antes en una dirección de prueba. La web no se anuncia hasta cumplir T21.

## Riesgos para la fecha

- **T18:** la revisión de los textos legales depende de otra persona, en plena época de fiestas.
- **T02:** sin dominio no hay correo ni envío del formulario.
