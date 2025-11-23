# tanstack-start-prerender-error-vite

## Setup

```bash
  bun i
  bun run build
```

## Expected error

```bash
vite v7.2.4 building ssr environment for production...
✓ 39 modules transformed.
✓ built in 58ms
✔ Generated public .output/public                                                                                                      nitro 
ℹ Building Nitro Server (preset: node-server, compatibility date: 2025-11-23)                                                          nitro 
✔ Nitro Server built                                                                                                                   nitro 
  ├─ .output/server/chunks/_/_tanstack-start-manifest_v-C1R-ln6O.mjs (529 B) (305 B gzip)
  ├─ .output/server/chunks/_/_tanstack-start-manifest_v-C1R-ln6O.mjs.map (456 B) (249 B gzip)
  ├─ .output/server/chunks/_/index-CcIeYgG-.mjs (194 B) (185 B gzip)
  ├─ .output/server/chunks/_/index-CcIeYgG-.mjs.map (232 B) (180 B gzip)
  ├─ .output/server/chunks/_/router-DBGQaaa-.mjs (1.55 kB) (714 B gzip)
  ├─ .output/server/chunks/_/router-DBGQaaa-.mjs.map (1.39 kB) (561 B gzip)
  ├─ .output/server/chunks/_/start-HYkvq4Ni.mjs (101 B) (105 B gzip)
  ├─ .output/server/chunks/_/start-HYkvq4Ni.mjs.map (163 B) (142 B gzip)
  ├─ .output/server/chunks/virtual/entry.mjs (43.7 kB) (11.6 kB gzip)
  ├─ .output/server/chunks/virtual/entry.mjs.map (317 B) (225 B gzip)
  ├─ .output/server/index.mjs (150 kB) (37.3 kB gzip)
  └─ .output/server/package.json (614 B) (291 B gzip)
Σ Total size: 2.04 MB (433 kB gzip)
✔ You can preview this build using node .output/server/index.mjs                                                                       nitro 
[prerender] Prerendering pages...
[prerender] Concurrency: 8
[prerender] Crawling: /
Error [ERR_MODULE_NOT_FOUND]: Cannot find module '/path/to/build-error-with-nitro/dist/server/server.js' imported from /path/to/build-error-with-nitro/node_modules/@tanstack/start-plugin-core/dist/esm/preview-server-plugin/plugin.js
    at finalizeResolution (node:internal/modules/esm/resolve:274:11)
    at moduleResolve (node:internal/modules/esm/resolve:864:10)
    at defaultResolve (node:internal/modules/esm/resolve:990:11)
    at nextResolve (node:internal/modules/esm/hooks:748:28)
    at o (file:///path/to/build-error-with-nitro/node_modules/@tailwindcss/node/dist/esm-cache.loader.mjs:1:69)
    at nextResolve (node:internal/modules/esm/hooks:748:28)
    at Hooks.resolve (node:internal/modules/esm/hooks:240:30)
    at MessagePort.handleMessage (node:internal/modules/esm/worker:201:24)
    at [nodejs.internal.kHybridDispatch] (node:internal/event_target:827:20)
    at MessagePort.<anonymous> (node:internal/per_context/messageport:23:28)
[prerender] Prerendered 0 pages:
[sitemap] Hint: Pages found, but no sitemap host has been set. To enable sitemap generation, set the `sitemap.host` option.
file:///path/to/build-error-with-nitro/node_modules/@tanstack/start-plugin-core/dist/esm/prerender.js:126
            throw new Error(`Failed to fetch ${page.path}: ${res.statusText}`, {
                  ^
Error: Failed to fetch /: Internal Server Error
    at file:///path/to/build-error-with-nitro/node_modules/@tanstack/start-plugin-core/dist/esm/prerender.js:126:19
    at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
    at async file:///path/to/build-error-with-nitro/node_modules/@tanstack/start-plugin-core/dist/esm/queue.js:38:17 {
  [cause]: Response {}
}
Node.js v24.5.0
error: script "build" exited with code 1
```
