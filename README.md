# Materiales de curso — Escuela de Laicos y Seminario

Sitio estático con los materiales de 4 materias:

- **Historia de la Iglesia** y **Antropología** (Escuela de Laicos)
- **Cosmología** y **Epistemología** (Seminario, Filosofía)

Publicado con **GitHub Pages**. Cada materia tiene su propia página protegida
con un código de acceso simple (ver advertencia abajo).

## Cómo publicar (GitHub Pages)

1. Sube este repositorio a GitHub (crea el repo en github.com y luego):
   ```
   git remote add origin https://github.com/TU_USUARIO/escuela-laicos.git
   git branch -M main
   git push -u origin main
   ```
2. En GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: main / (root)**.
3. En un par de minutos el sitio queda disponible en
   `https://TU_USUARIO.github.io/escuela-laicos/`.

## Cómo agregar contenido

- **PDFs propios (guías, resúmenes, cuestionarios):** cópialos dentro de la
  carpeta `materiales/` de la materia correspondiente. Luego edita el
  `index.html` de esa materia y agrega un `<li><a href="materiales/archivo.pdf">Nombre</a></li>`
  en la sección "Material propio".
- **Libros de texto con derechos de autor:** NO se suben a este repositorio
  (es público). Súbelos a una carpeta de Google Drive con acceso "cualquiera
  con el enlace puede ver", y pega ese enlace en `ENLACE_DRIVE_...` dentro del
  `index.html` de la materia.
- **Videos de YouTube:** reemplaza `VIDEO_ID_1` por el ID del video (la parte
  de la URL después de `v=`). Copia el bloque `<div class="video-embed">...</div>`
  tantas veces como videos necesites.
- **Formularios de Google (evaluaciones):** reemplaza `ENLACE_GOOGLE_FORM_1`
  por el enlace de "Enviar" del formulario.

## Cómo cambiar el código de acceso de una materia

1. Abre `admin/generar-hash.html` en tu navegador (haciendo doble clic en el
   archivo, sin necesidad de internet).
2. Escribe la nueva contraseña y copia el código que genera.
3. En el `index.html` de la materia, reemplaza el valor de `data-hash` en
   `<div id="gate" data-hash="...">` por ese código.
4. Sube los cambios (`git add`, `git commit`, `git push`).

Todas las materias vienen con la contraseña temporal **`cambiar123`** —
cámbiala antes de compartir el sitio.

## Advertencia sobre el candado de acceso

El código de acceso es una barrera simple pensada para que los estudiantes
no entren por error y para no indexar el contenido en buscadores casuales.
**No es seguridad real**: el HTML de cada página sigue siendo descargable
por cualquiera con conocimientos técnicos, aunque no vea el contenido en el
navegador sin la contraseña. No subas aquí material verdaderamente
confidencial ni datos personales de estudiantes.
