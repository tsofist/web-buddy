# Concept

This is a set of pre-configured configurations for quickly starting web projects of the JS family.

Unlike `1.x`, where the configs were plain YAML/JSON files copied around, `2.x` ships them as a
compiled ESM package: every config is a typed TypeScript source in `src/`, published as `lib/`.
You import the pieces you need and compose them — extension happens in code, not via `extends`
strings.

Thus, all projects using this package have uniform settings for styling, building, and other
things. Exceptions can always be localized in the project's own config files.

### What's included?

* **ESLint 10** (flat config) — _TypeScript, JavaScript, YAML, VueJS, JSON/JSONC/JSON5_
* **Stylelint 17** — _Vue, SCSS, PostCSS, HTML_
* **Prettier**
* **.editorconfig**
* **TypeScript 6** — base / web / isomorphic `tsconfig` presets
* **Semantic release** — _GitHub, GitLab_

### Requirements

* Node.js `>= 22.22.2`
* ESM-only package (no CommonJS consumption)

# How to use

### As concept or sample

Your project may differ significantly from the configurations collected in this repository, so you
can simply fork this project and make your own changes. Alternatively, you can use this repository
as a sample for creating your own.

### Directly

#### ESLint

`eslint.config.mjs`:

```js
import { createWebBuddyESLintConfig } from '@tsofist/web-buddy/lib/eslint/config.js';

export default createWebBuddyESLintConfig();
```

The callback form lets you adjust the default chain before it is passed to `defineConfig`:

```js
import { createWebBuddyESLintConfig } from '@tsofist/web-buddy/lib/eslint/config.js';
import { appendESLintIgnores } from '@tsofist/web-buddy/lib/eslint/ignores.js';

export default createWebBuddyESLintConfig((chain) => {
    appendESLintIgnores(['./generated/'], chain);

    chain.push({
        files: ['**/*.d.ts'],
        rules: {
            '@typescript-eslint/consistent-type-definitions': 'off',
        },
    });

    return chain;
});
```

Individual blocks are exported too, if you prefer to assemble the chain yourself:
`config.typescript.js`, `config.vue.js`, `config.json.js`, `config.yaml.js`,
`config.shared.rules.js`, `ignores.js`, `config.fws-mercurio.js`.

#### Extra strictness

There is no separate "stricter" config any more — strictness is driven by the `WEB_BUDDY_STRICT`
environment variable:

```json
{
  "scripts": {
    "lint:code": "WEB_BUDDY_STRICT=1 eslint . --cache --cache-location .cache/"
  }
}
```

Accepted values: `0` / `false` (default, off), `1` / `true` (all strict features on), or a
comma-separated list of feature names (currently `unsafe-fn`).

#### Prettier

`prettier.config.mjs`:

```js
import { WebBuddyPrettierConfig } from '@tsofist/web-buddy/lib/prettier/config.js';

export default WebBuddyPrettierConfig;
```

#### Stylelint

`stylelint.config.mjs`:

```js
import { WebBuddyStylelintConfig } from '@tsofist/web-buddy/lib/stylelint/config.js';

export default WebBuddyStylelintConfig;
```

#### TypeScript

`tsconfig.json`:

```json
{
  "extends": "@tsofist/web-buddy/lib/tsconfig/config.web.json"
}
```

Available presets: `config.base.json`, `config.web.json` (DOM), `config.isomorphic.json`.

#### Semantic release

In `package.json`:

```json
{
  "release": {
    "extends": "@tsofist/web-buddy/lib/semantic-release/config.github.js"
  }
}
```

Use `config.gitlab.js` for GitLab. Both presets configure the `main`/`master` release branch plus
the `next`, `stage`, `dev`, `beta` and `alpha` prerelease channels, and the standard plugin chain
(commit-analyzer, release-notes-generator, platform, npm, git).

#### .editorconfig

```json
{
  "scripts": {
    "prepare": "husky && (cp node_modules/@tsofist/web-buddy/.editorconfig \"$INIT_CWD\" || true)"
  }
}
```

# Migrating from 1.x

* The package is ESM-only and requires Node.js `>= 22.22.2`.
* ESLint `>= 10` with flat config only; `.eslintrc.yaml` and `eslint/**/*.yaml` are gone.
* `.stylelintrc.yaml`, `.prettierrc.js` and `.releaserc-*.json` are gone — import the corresponding
  module from `lib/` instead.
* `tsconfig/browser.json` → `lib/tsconfig/config.web.json`,
  `tsconfig/server.json` → `lib/tsconfig/config.isomorphic.json`.
* `eslint/stricter.extends.yaml` → the `WEB_BUDDY_STRICT` environment variable.

---
