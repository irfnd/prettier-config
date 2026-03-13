# `@irfnd/prettier-config`

> A shareable [Prettier](https://prettier.io) configuration with opinionated defaults.

This package includes [`prettier-plugin-organize-imports`](https://github.com/simonhaenisch/prettier-plugin-organize-imports) as a bundled dependency. No additional plugin installation is required.

## Installation

Install the package along with `prettier`, which is required as a peer dependency:

```bash
npm install @irfnd/prettier-config prettier -D
```

```bash
yarn add @irfnd/prettier-config prettier -D
```

```bash
pnpm add @irfnd/prettier-config prettier -D
```

```bash
bun add @irfnd/prettier-config prettier -D
```

## Usage

### Basic

For projects that do not require any configuration overrides, reference the package directly in `package.json`:

```json
{
  "prettier": "@irfnd/prettier-config"
}
```

Alternatively, use a `.prettierrc` file:

```
"@irfnd/prettier-config"
```

### Extending the Configuration

To override specific options, import the config into a Prettier configuration file and spread it as the base. This approach is required when using the `package.json` field is not sufficient.

**`prettier.config.mjs` / `.prettierrc.mjs`**
```js
import irfndConfig from '@irfnd/prettier-config';

/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  ...irfndConfig,
  printWidth: 100,
};

export default config;
```

**`prettier.config.ts`**
```ts
import type { Config } from 'prettier';
import irfndConfig from '@irfnd/prettier-config';

const config = {
  ...irfndConfig,
  printWidth: 100,
} satisfies Config;

export default config;
```

> **Important:** Always spread `...irfndConfig` as the base. Omitting the spread will discard the bundled `prettier-plugin-organize-imports` plugin.

### Extending the Plugins

To include additional plugins alongside the bundled one, spread `irfndConfig.plugins` explicitly into the `plugins` array:

**`prettier.config.mjs` / `.prettierrc.mjs`**
```js
import irfndConfig from '@irfnd/prettier-config';

/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  ...irfndConfig,
  plugins: [
    ...irfndConfig.plugins,
    'prettier-plugin-tailwindcss',
  ],
};

export default config;
```

**`prettier.config.ts`**
```ts
import type { Config } from 'prettier';
import irfndConfig from '@irfnd/prettier-config';

const config = {
  ...irfndConfig,
  plugins: [
    ...irfndConfig.plugins,
    'prettier-plugin-tailwindcss',
  ],
} satisfies Config;

export default config;
```

> **Important:** Spread `irfndConfig.plugins` as the first element to ensure `prettier-plugin-organize-imports` remains active alongside any additional plugins.

## License

[MIT](./LICENSE)
