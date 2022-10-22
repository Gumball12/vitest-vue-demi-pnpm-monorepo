# Vitest + VueDemi + PNPM Workspace (Monorepo) w/ Turborepo

[VueDemi](https://github.com/vueuse/vue-demi) is a library that helps you create components that support both Vue 2 and Vue 3.

Here I show you how to test VueDemi for Vue 2 and Vue 3 using [Vitest](https://vitest.dev/) in a [PNPM Workspace](https://pnpm.io/workspaces) (Monorepo) environment configured with [Turborepo](https://turborepo.org/).

### Project Structure

- `packages/my-component`: A Component created using VueDemi
- `packages/test-vue-2`: Running tests on Vue `<=2.6`
- `packages/test-vue-3`: Running tests on Vue `>3.0`

### Getting Started

```bash
git clone https://github.com/Gumball12/vitest-vue-demi-pnpm-monorepo.git
cd vitest-vue-demi-pnpm-monorepo

pnpm install # install all dependencies

pnpm test-v2 # run tests for Vue <=2.6
pnpm test-v3 # run tests for Vue >=3.0
pnpm build # build my-component (Files built on `packages/my-component/dist/` are created)
```

## License

[MIT](./LICENSE) @Gumball12
