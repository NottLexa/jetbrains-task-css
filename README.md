# Jetbrains backtracing css task
> For "Tracing Generated CSS Back to Source in WebStorm" internship opportunity,
> Internship Projects Summer/Fall 2026

# Setup

This is a basic Parcel app. To install it, you need to just run:
```cmd
npm install
```
To run it in dev mode, use this:
```cmd
npm run dev
```
To build the project, use this:
```cmd
npm run build
```
The bulid command will build the project to `/dist` directory.

(Also, if you're testing the built vite project in WebStorm, you might want
to run `npm run build-for-webstorm` to build the project accessible for the
*WebStorm debug HTML document view* to open it).

# How authored CSS is transformed into CSS bundle
The project uses SCSS (Sass) as the authored stylesheet format.
You can find source SCSS files in `/src/styles`.
During the build process, Parcel compiles Sass into standard CSS and then
bundles the generated CSS into a final CSS file used by the browser.

Because Sass features such as variables and nesting are compiled into
standard CSS rules, the generated CSS does not correspond 1-to-1 with
the original source files.

# Sourcemaps

Sourcemaps for both JS and CSS are generated automatically with Parcel's
build and contained in the same `/dist` directory
(`jetbrains-task-css.[hash].css` => `jetbrains-task-css.[hash].css.map`).