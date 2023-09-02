# vue3-base

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## What do we have?

1. [Axios](https://axios-http.com/docs/intro): Promise-base http client, config in `src/utils/http.ts`
2. [Pinia](https://pinia.vuejs.org/introduction.html): State management, use as a composable in vue 3, [core-concept](https://pinia.vuejs.org/core-concepts/)
3. [Js-cookie](https://www.npmjs.com/package/js-cookie): Simple and lightweight for handling cookie
4. [Vue-router](https://router.vuejs.org/guide/essentials/dynamic-matching.html): Official router for Vue, if you have a nested router, [read it](https://router.vuejs.org/guide/essentials/nested-routes.html)
5. [Vue 3](https://vuejs.org/guide/typescript/composition-api.html#typing-component-props): Composition API

## What do you have to do?

1. Create branch start with one of keywords: `feature|feedback|force|hotfix|revert|reset|refactor|release` and your task id

```
Example: feature/task_01
```

2. After you run the commit command, It will automate the check of the commit message format, run the test, check eslint, and show you the results. If errors, your commitment will be ignored. Please fix all of the errors before committing again.

```
Don't be shy to ask me if you need help ^^!
```

3. After you run the push command, It will check your branch name format. Ignore this if you did step 1. If you aren't, Please change your branch name like step 1

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
yarn
```

### Compile and Hot-Reload for Development

```sh
yarn dev
```

### Type-Check, Compile and Minify for Production

```sh
yarn build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
yarn test
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
yarn test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
yarn build
yarn test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
yarn lint
```
