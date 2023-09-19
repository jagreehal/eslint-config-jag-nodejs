# eslint-config-jag-nodejs

- Usable in any TypeScript project, includes React rules.
- [sindresorhus/eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
- [xojs/eslint-config-xo](https://github.com/sindresorhus/eslint-config-xo)
- [eslint-functional/eslint-plugin-functional](https://github.com/eslint-functional/eslint-plugin-functional)

## Install

`pnpm|yarn|npm install eslint-config-jagreehal`

**Requires TypesScript and tsconfig.json at root directory.**

## Config

In **package.json**:

```json
"eslintConfig": {
  "extends": ["jagreehal"],
}
```

In **.eslintrc**:

```json
{
  "extends": "jagreehal"
}
```

**Scripts**:

```json
"scripts": {
  "lint": "eslint",
  "lint:fix": "eslint . --fix",
}
```
