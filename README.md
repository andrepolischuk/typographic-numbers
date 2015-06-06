# typographic-numbers [![Build Status](https://travis-ci.org/andrepolischuk/typographic-numbers.svg?branch=master)](https://travis-ci.org/andrepolischuk/typographic-numbers)

  > Micro module for formatting numbers

## Install

```sh
npm install --save typographic-numbers
```

## Usage

  Use typographic numbers depending on your locale for proper thousand separator and decimal point.
  Use [ISO 639](http://www.wikiwand.com/en/List_of_ISO_639-1_codes) codes to specify locale, example `en-uk`, `ru-ru`, `da`.

```js
var numbers = require('typographic-numbers');

numbers('15215'); // 15,215
numbers('9015215.215'); // 9,015,215.215
numbers('15215 and 15215,215'); // 15,215 and 15,215.215
numbers('9015215.215', {locale: 'ru-ru'}); // 9 015 215,215
```

## License

  MIT
