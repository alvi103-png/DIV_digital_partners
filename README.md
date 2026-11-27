# DIV · Digital Partners

Web de DIV: carta de presentación, catálogo de servicios y contacto para pymes y autónomos.

**Estado:** proyecto base. La página es provisional y el diseño todavía no está pasado a componentes.

## Requisitos

- Node.js 22.12 o superior. La versión recomendada está en `.nvmrc`.
- npm.

## Empezar

```bash
npm install
npm run dev
```

La terminal muestra la dirección local, normalmente <http://localhost:5173>.

## Comandos

| Comando | Qué hace |
|---|---|
| `npm run dev` | Arranca la web en local y recarga con cada cambio |
| `npm run build` | Revisa los tipos y genera la web, con el HTML ya incluido, en `dist/` |
| `npm run preview` | Muestra en local la web generada |
| `npm run typecheck` | Revisa los tipos |
| `npm run lint` | Revisa el código |
| `npm run format` | Aplica el formato común |
| `npm run check` | Revisa código y formato y construye la web. Ejecútalo antes de subir cambios |

## Estructura

```
src/               Código de la web
  App.tsx          Página
  main.tsx         Arranque en el navegador
  entry-server.tsx Generación del HTML al construir
scripts/           Utilidades de construcción
design/            Maquetas. La referencia es maqueta-v5.html
specs/             Qué se construye y cómo
```

## Documentación

- [Especificación](specs/spec.md): contenido, diseño y alcance.
- [Plan técnico](specs/plan.md): tecnología y calendario.
- [Tareas](specs/tasks.md): trabajo pendiente.

## Cómo trabajamos

- Cada cambio va en una rama propia y se une a `main` cuando está revisado.
- No se guardan claves en el repositorio. Van en archivos `.env`, que git ignora.

## Publicación

Prevista en Cloudflare. Todavía no está configurada y el formulario aún no envía mensajes.

## Skills incluidas

Guías para asistentes de código, de terceros y con sus propias licencias. El origen está en `skills-lock.json`.

| Skill | Origen | Licencia indicada |
|---|---|---|
| `checklist-design` | [Checklist-Design/skills](https://github.com/Checklist-Design/skills) | MIT |
| `gemini-frontend-design` | [google-gemini/demolab](https://github.com/google-gemini/demolab) | Apache-2.0 |
