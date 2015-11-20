'use strict';
var locales = require('./locales');
var americanExpress = '3[47]\\d\\d(?:\\s\\d{4}){2}\\s\\d{3}';
var maestro = '(?:5[0678]\\d\\d|6304|6390|67\\d\\d)(?:\\s\\d{4}){2}(?:\\s\\d{1,7})?';
var mastercard = '5[1-5]\\d\\d(?:\\s\\d{4}){3}';
var visa = '4\\d{3}(?:\\s\\d{4}){2}\\s\\d(?:\\d{3})?';
var number = '\\d+';

var numberRegExp = new RegExp('(' + [
  americanExpress,
  maestro,
  mastercard,
  visa,
  number
].join('|') + ')(?:[.,](\\d+))?', 'gm');

module.exports = function (input, opts) {
  opts = opts || {};
  var locale = opts.locale || 'en-us';
  var sep = locales[locale.toLowerCase()];
  if (!sep) return input;

  return input.replace(numberRegExp, function (match, num, dec) {
    if (num.indexOf(' ') > 0) return match;
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
