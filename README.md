# DIV · Digital Partners

> Ideas diferentes. Soluciones reales.

Web de DIV: carta de presentación, catálogo de servicios y contacto para pymes y autónomos. Es una sola página, en español, para España y Latinoamérica.

## Estado

En construcción.

| Parte | Situación |
|---|---|
| Especificación y plan | Definidos |
| Diseño | Maqueta de referencia: [design/maqueta-v5.html](design/maqueta-v5.html). Faltan la tipografía definitiva y ajustes propios |
| Proyecto base | Listo. La página todavía es provisional |
| Formulario | Aún no envía mensajes; el envío se decidirá cuando haya dominio |
| Publicación | Prevista en Cloudflare, sin configurar. Objetivo: finales de diciembre de 2026 |

## Tecnología

React y TypeScript, construidos con Vite. El HTML se genera por adelantado, así que la web publicada son archivos estáticos.

## Requisitos

- [Node.js](https://nodejs.org/) 22.12 o superior (salvo las versiones 23). La recomendada está en `.nvmrc`.
- npm, que se instala con Node.js.
- Git.

## Primeros pasos

```bash
git clone https://github.com/alvi103-png/DIV_digital_partners.git
cd DIV_digital_partners
git switch dev
npm install
npm run dev
```

La terminal muestra la dirección local, normalmente <http://localhost:5173>. Para detenerla, pulsa `Ctrl + C`.

## Comandos

| Comando | Qué hace |
|---|---|
| `npm run dev` | Arranca la web en local y recarga con cada cambio |
| `npm run build` | Revisa los tipos y genera la web en `dist/` |
| `npm run preview` | Muestra en local la web generada. Requiere `npm run build` antes |
| `npm run typecheck` | Revisa los tipos |
| `npm run lint` | Revisa el código |
| `npm run format` | Aplica el formato común |
| `npm run format:check` | Comprueba el formato sin cambiar archivos |
| `npm run check` | Revisa código y formato y construye la web |

## Estructura

```
src/
  App.tsx           Página
  main.tsx          Arranque en el navegador
  entry-server.tsx  Generación del HTML al construir
  index.css         Estilos base
scripts/
  prerender.js      Inserta el HTML generado en dist/index.html
design/             Maquetas de diseño
specs/              Qué se construye y cómo
index.html          Plantilla de la página: título y descripción
```

## Cómo trabajamos

| Rama | Para qué |
|---|---|
| `main` | Versión estable. Solo recibe cambios mediante pull request |
| `dev` | Rama de trabajo permanente. No se borra |

1. Antes de empezar, actualiza tu copia:
   ```bash
   git switch dev
   git pull
   ```
2. Haz tus cambios en `dev`. Si son grandes o vais a trabajar a la vez en lo mismo, crea una rama a partir de `dev` y únela de vuelta con un pull request.
3. Comprueba que todo está bien:
   ```bash
   npm run format
   npm run check
   ```
4. Guarda y sube los cambios:
   ```bash
   git add .
   git status
   git commit -m "Describe el cambio"
   git push
   ```
5. Cuando algo esté listo, abre un pull request de `dev` a `main`. Únelo con **Create a merge commit**: con las otras opciones, `dev` y `main` acaban con historiales distintos.

### Cuidado

El repositorio es **público**. No guardes en él claves, contraseñas, datos de clientes ni información privada. Las claves van en archivos `.env`, que git ignora. Revisa `git status` antes de cada commit.

## Documentación

- [Especificación](specs/spec.md): contenido, reglas de diseño y alcance.
- [Plan técnico](specs/plan.md): tecnología y calendario.
- [Tareas](specs/tasks.md): trabajo pendiente y cómo comprobar cada tarea.

## Equipo

Viviana y Damaris.

## Skills incluidas

Guías de terceros para asistentes de código, cada una con su propia licencia. El origen está en `skills-lock.json`.

| Skill | Origen | Licencia indicada |
|---|---|---|
| `checklist-design` | [Checklist-Design/skills](https://github.com/Checklist-Design/skills) | MIT |
| `gemini-frontend-design` | [google-gemini/demolab](https://github.com/google-gemini/demolab) | Apache-2.0 |
