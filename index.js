'use strict';
var locales = require('./locales');

module.exports = function (input, opts) {
  opts = opts || {};
  var locale = opts.locale || 'en-us';
  var sep = locales[locale.toLowerCase()];
  if (!sep) return input;

  return input.replace(/(\d+)[\.,]*(\d*)/gim, function (match, num, dec) {
    return format(+num, sep.charAt(0)) + (dec ? sep.charAt(1) + dec : '');
  });
};

function format(int, sep) {
  var str = '';
  var n;

  while (int) {
    n = int % 1e3;
    int = parseInt(int / 1e3);
    if (int === 0) return n + str;
    str = sep + (n < 10 ? '00' : (n < 100 ? '0' : '')) + n + str;
  }
}
