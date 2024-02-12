# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules, plus some extras and formatted files ready to go.

Plugins installed:

- [@rocketseat/eslint-config](https://github.com/Rocketseat/eslint-config-rocketseat)
- [eslint-plugin-simple-import-sort](https://github.com/lydell/eslint-plugin-simple-import-sort)

## ESLint configuration

```js
{
  // rocketseat/eslint-config
  "extends": "@rocketseat/eslint-config/react",
  // eslint-plugin-simple-import-sort
  "plugins": ["simple-import-sort"],
  "rules": {
    "import/newline-after-import" : "error",
    "import/no-duplicates": "error",
    "simple-import-sort/imports": "error", 
  }
}
```
