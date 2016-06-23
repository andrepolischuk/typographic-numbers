import test from 'ava';
import numbers from './index';

test('fix integer', t => {
  t.is(numbers('215', { locale: 'en-us' }), '215');
  t.is(numbers('15215', { locale: 'en-us' }), '15,215');
  t.is(numbers('9015215', { locale: 'en-us' }), '9,015,215');
});

test('fix float', t => {
  t.is(numbers('215.215', { locale: 'en-us' }), '215.215');
  t.is(numbers('15215,215', { locale: 'en-us' }), '15,215.215');
  t.is(numbers('9015215.215', { locale: 'en-us' }), '9,015,215.215');
});

test('fix multiple numbers', t => {
  t.is(numbers('215 and 215.215', { locale: 'en-us' }), '215 and 215.215');
  t.is(numbers('15215 and 15215,215', { locale: 'en-us' }), '15,215 and 15,215.215');
  t.is(numbers('9015215 and 9015215.21', { locale: 'en-us' }), '9,015,215 and 9,015,215.21');
});

test('return origin for credit card number', t => {
  const visa = '4211 8814 8501 7922';
  const mastercard = '5211 8814 8501 7922';
  t.is(numbers(mastercard, { locale: 'en-us' }), mastercard);
  t.is(numbers(`15215,215 from ${visa}`, { locale: 'en-us' }), `15,215.215 from ${visa}`);
});

test('return origin for undefined locale', t => {
  t.is(numbers('215.215', { locale: 'rs-ru' }), '215.215');
  t.is(numbers('15215,215', { locale: 'rs-ru' }), '15215,215');
  t.is(numbers('15215,215'), '15215,215');
});

test('fix numbers via case-insensitive locale', t => {
  t.is(numbers('215.215', { locale: 'ru-RU' }), '215,215');
  t.is(numbers('15215,215', { locale: 'ru-ru' }), '15 215,215');
});
