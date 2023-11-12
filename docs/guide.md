# 配置化

公共配置

## prettier

### Install

```shell
# with npm
npm i @taoismcn/prettier-config -D

# with yarn
yarn add @taoismcn/prettier-config -D

# with pnpm
pnpm add @taoismcn/prettier-config -D
```

### Usage

```js
// .prettierrc.js

const config = require('@taoismcn/prettier-config')

module.exports = {
	...config
}
```

## eslint

### Install

```shell
# with npm
npm i @taoism/eslint-config -D

# with yarn
yarn add @taoism/eslint-config -D

# with pnpm
pnpm add @taoism/eslint-config -D
```

### Usage

```json
{
	"extends": ["@taoism"]
}
```

## Stylelint

### Install

```shell
# with npm
npm i @taoism/stylelint-config -D

# with yarn
yarn add @taoism/stylelint-config -D

# with pnpm
pnpm add @taoism/stylelint-config -D
```

### Usage

```js
{
  "extends": ["@taoism/stylelint-config"]
}
```

## Commitlint

### Install

```shell
# with npm
npm i @taoism/commitlint-config -D

# with yarn
yarn add @taoism/commitlint-config -D

# with pnpm
pnpm add @taoism/commitlint-config -D
```

### Usage

commitlint.config.js

```shell
{
	extends: ['@taoism/commitlint-config']
}
```
