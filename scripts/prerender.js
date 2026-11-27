// Inserta en dist/index.html el HTML de la aplicación ya generado.
import { readFile, rm, writeFile } from 'node:fs/promises'

const root = new URL('../', import.meta.url)
const marker = '<!--app-html-->'

const { render } = await import(new URL('dist-ssr/entry-server.js', root).href)
const htmlFile = new URL('dist/index.html', root)
const template = await readFile(htmlFile, 'utf8')

if (!template.includes(marker)) {
  throw new Error(`No se encontró ${marker} en dist/index.html`)
}

await writeFile(
  htmlFile,
  template.replace(marker, () => render()),
)
await rm(new URL('dist-ssr', root), { recursive: true, force: true })
console.log('HTML generado en dist/index.html')
