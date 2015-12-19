'use strict';
var test = require('ava');
var numbers = require('./');

test('should fix integer', function (t) {
  t.is(numbers('215'), '215');
  t.is(numbers('15215'), '15,215');
  t.is(numbers('9015215'), '9,015,215');
});

test('should fix float', function (t) {
  t.is(numbers('215.215'), '215.215');
  t.is(numbers('15215,215'), '15,215.215');
  t.is(numbers('9015215.215'), '9,015,215.215');
});

test('should fix multiple numbers', function (t) {
  t.is(numbers('215 and 215.215'), '215 and 215.215');
  t.is(numbers('15215 and 15215,215'), '15,215 and 15,215.215');
  t.is(numbers('9015215 and 9015215.21'), '9,015,215 and 9,015,215.21');
});

test('should return origin for credit card number', function (t) {
  t.is(numbers('5211 8814 8501 7922'), '5211 8814 8501 7922');
  t.is(numbers('15215,215 from 4211 8814 8501 7922'), '15,215.215 from 4211 8814 8501 7922');
});

test('should return origin for undefined locale', function (t) {
  t.is(numbers('215.215', {locale: 'rs-ru'}), '215.215');
  t.is(numbers('15215,215', {locale: 'rs-ru'}), '15215,215');
});

test('should fix numbers via case-insensitive locale', function (t) {
  t.is(numbers('215.215', {locale: 'ru-RU'}), '215,215');
  t.is(numbers('15215,215', {locale: 'ru-ru'}), '15 215,215');
});
