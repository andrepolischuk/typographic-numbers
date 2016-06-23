import db from 'typographic-numbers-l10n-db';

const amex = '3[47]\\d\\d(?:\\s\\d{4}){2}\\s\\d{3}';
const maestro = '(?:5[0678]\\d\\d|6304|6390|67\\d\\d)(?:\\s\\d{4}){2}(?:\\s\\d{1,7})?';
const mastercard = '5[1-5]\\d\\d(?:\\s\\d{4}){3}';
const visa = '4\\d{3}(?:\\s\\d{4}){2}\\s\\d(?:\\d{3})?';
const number = '\\d+';

const numberRegExp = new RegExp(
  `(${amex}|${maestro}|${mastercard}|${visa}|${number})(?:[.,](\\d+))?`,
  'gm'
);

function prefix(mod) {
  if (mod >= 100) return '';
  if (mod >= 10) return '0';
  return '00';
}

function format(num, sep, tail = '') {
  const mod = num % 1e3;
  const int = parseInt(num / 1e3, 10);
  if (int === 0) return `${mod}${tail}`;
  return format(int, sep, `${sep}${prefix(mod)}${mod}${tail}`);
}

export default function typographicNumbers(input = '', { locale = '' } = {}) {
  const sep = db[locale.toLowerCase()];
  if (!sep) return input;

  return input.replace(numberRegExp, (match, num, dec) => {
    if (num.indexOf(' ') > 0) return match;
    return format(+num, sep.charAt(0)) + (dec ? sep.charAt(1) + dec : '');
  });
}
