# typographic-numbers [![Build Status](https://travis-ci.org/andrepolischuk/typographic-numbers.svg?branch=master)](https://travis-ci.org/andrepolischuk/typographic-numbers)

  Micro module for formatting numbers

## Instalation

```sh
$ npm install --save typographic-numbers
```

## Usage

```js
var numbers = require('typographic-numbers');

numbers('15215'); // 15,215
numbers('9015215.215'); // 9,015,215.215
numbers('15215 and 15215,215'); // 15,215 and 15,215.215
numbers('9015215.215', {locale: 'ru_RU'}); // 9 015 215,215
```

## License

  MIT
