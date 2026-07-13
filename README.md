# Learning esbuild

This is a small project I made to understand how esbuild works.

esbuild is a fast tool that can bundle JavaScript and TypeScript files together.

## What I learned

esbuild starts from an entry file and follows all the imports.

```text
main.ts
   ↓
maths.ts
   ↓
app.js
```

It can also:

- convert TypeScript into JavaScript
- bundle multiple files
- minify the final output
- rebuild files using watch mode

## Install

```bash
pnpm add -D esbuild
```

## Build

```bash
pnpm exec esbuild src/main.ts \
  --bundle \
  --outfile=dist/app.js
```

## Watch mode

```bash
pnpm exec esbuild src/main.ts \
  --bundle \
  --outfile=dist/app.js \
  --watch
```

## Production build

```bash
pnpm exec esbuild src/main.ts \
  --bundle \
  --outfile=dist/app.js \
  --minify
```

## Important

esbuild can remove TypeScript types, but it does not fully type-check the code.

For type checking, TypeScript should be used separately.

```bash
pnpm exec tsc --noEmit
```

## Final note

esbuild is mainly useful when you need a very fast and simple build tool.
