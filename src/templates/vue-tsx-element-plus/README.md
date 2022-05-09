# Vue 3 + TypeScript + Vite + Element Plus + TSX support

This template should help get you started developing with Vue 3 and TSX in Vite. The template uses Render function, check out the [Render Functions & JSX](https://vuejs.org/guide/extras/render-function.html) to learn more.

## All Document
- [Vue.js](https://vuejs.org/)
- [Vue router](https://router.vuejs.org/)
- [Element Plus](https://element-plus.org/)
- [Vue3 styled components](https://github.com/UX-and-I/vue3-styled-components)
- [vite](https://vitejs.org/)
---
Though TSX is used in this template, you can still use `SFC` in `.vue` files.

Use `vuetsc` for faster generation for `defineComponent` block.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).