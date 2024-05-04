# Sveltekit Unnamed Stack ❓

The "Sveltekit Unnamed Stack" is designed to be minimal and extendable and tries to stick to sveltekit core whenever possible, `sites` ar built with the sveltekit barebones Skeleton scaffold, while the `packages` are built using the sveltekit barebone Library scaffold with some modifications in package.json and tsconfig to make them easier to share

this template is perfect for any kind of project that needs a shared ui and db, you can clone this repo or fork it and add your additional needs like stripe for payments or workos for auth whatever you like

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `@acme/web`: a minimal [SvelteKit](https://kit.svelte.dev/) example app, using `@acme/ui` and `@acme/db`
- `@acme/ui`: Start of a UI package for the sites using shadcn-svelte
- `@acme/db`: Typesafe db calls using Drizzle & Planetscale

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

> In this template, we use `@acme` as a placeholder for package names. As a user, you might want to replace it with your own organization or project name. You can use find-and-replace to change all the instances of `@acme` to something like `@my-company` or `@project-name`.

## Quick Start

> **Note**
> The db package is preconfigured to use PlanetScale If you're using something else, make the necessary modifications to the [schema](./packages/db/src/lib/schema.ts) as well as the [client](./packages/db/src/lib/server/index.ts) and the [drizzle config](./packages/db/drizzle.config.ts).

> **Note**
> all package.json are configured to use bun workspaces If you would like to use a different package manager, make the necessary modifications to the [Root](./package.json), [@acme/ui](./packages/ui/package.json), [@acme/db](./packages/db/package.json) and the [@acme/web](./sites/web/package.json), Additionally if you're planning to use `vitest`, add it to all the projects you wish to use it on and change the test files to use vitest instead of `bun:test`.

if you're using bun make sure you are at the latest version, run the following command:
```bash
bun upgrade
```
### Setup dependencies

```bash
# Install dependencies
bun i

# Configure enviorment variables
# There is an `.env.example` in the root directory you can use for reference
cp .env.example .env

# Push the Drizzle schema to the database
bun db:push
```

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
bun run build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
bun run dev
```