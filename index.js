import db from 'typographic-numbers-l10n-db';

const americanExpress = '3[47]\\d\\d(?:\\s\\d{4}){2}\\s\\d{3}';
const maestro = '(?:5[0678]\\d\\d|6304|6390|67\\d\\d)(?:\\s\\d{4}){2}(?:\\s\\d{1,7})?';
const mastercard = '5[1-5]\\d\\d(?:\\s\\d{4}){3}';
const visa = '4\\d{3}(?:\\s\\d{4}){2}\\s\\d(?:\\d{3})?';
const number = '\\d+';

const numberRegExp = new RegExp('(' + [
  americanExpress,
  maestro,
  mastercard,
  visa,
  number
].join('|') + ')(?:[.,](\\d+))?', 'gm');

export default function typographicNumbers(input = '', {locale = 'en-us'} = {}) {
  const sep = db[locale.toLowerCase()];
  if (!sep) return input;

  return input.replace(numberRegExp, (match, num, dec) => {
    if (num.indexOf(' ') > 0) return match;
    return format(+num, sep.charAt(0)) + (dec ? sep.charAt(1) + dec : '');
  });
};

function format(int, sep) {
  let str = '';
  let n;

  while (int) {
    n = int % 1e3;
    int = parseInt(int / 1e3);
    if (int === 0) return n + str;
    str = sep + (n < 10 ? '00' : (n < 100 ? '0' : '')) + n + str;
  }
}
