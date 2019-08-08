# Transmute ejs
Transmutes ejs for the [Alchemy static site generator](https://github.com/alchemy-js/alchemy).

- Transmutes file content to use ejs templates
- File must contain front-matter with a valid layout property
  - `layout: <templateName>.ejs`
- Should appear after any markdown transmutations (if applicable)
- Options object accepts all valid `ejs` options

## Installation
`npm i @alchemy/transmute-ejs`

## API

This is a wrapper around the `ejs` [package](https://www.npmjs.com/package/ejs), accepting all valid options as an object.

```javascript
const Alchemy = require('@alchemy-js/alchemy');
const ejs = require('@alchemy-js/transmute-ejs');

Alchemy({
  /* file paths */
}).clean()
  .transmute(ejs({
    /* accepts valid ejs options as an object */
    use: './layouts'
  })
  .build()
```

## License
MIT
