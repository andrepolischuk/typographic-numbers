# typographic-numbers [![Build Status][travis-image]][travis-url]

> Micro module for formatting numbers

## Install

```sh
npm install --save typographic-numbers
```

## Usage

Use typographic numbers depending on your locale for proper thousand separator and decimal point.
Use [ISO 639][iso-639] codes to specify locale, example `en-uk`, `ru-ru`, `da`.
This module is based on [`typographic-numbers-l10n-db`][db] and choosing proper symbols for every locale.

```js
import numbers from 'typographic-numbers';

numbers('15215', {locale: 'en-us'}); // 15,215
numbers('9015215.215', {locale: 'en-us'}); // 9,015,215.215
numbers('15215 and 15215,215', {locale: 'en-us'}); // 15,215 and 15,215.215
numbers('9015215.215', {locale: 'ru-ru'}); // 9 015 215,215
```

## API

### numbers(input, options)

#### input

Type: `string`

Text for transform.

#### options

Type: `object`

Options to pass locale for proper separator and point symbols.

## License

MIT

[travis-url]: https://travis-ci.org/andrepolischuk/typographic-numbers
[travis-image]: https://travis-ci.org/andrepolischuk/typographic-numbers.svg?branch=master

[iso-639]: http://www.wikiwand.com/en/List_of_ISO_639-1_codes
[db]: https://github.com/andrepolischuk/typographic-numbers-l10n-db
