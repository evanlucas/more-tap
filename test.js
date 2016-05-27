'use strict'

const tap = require('tap')
require('./')

tap.ok(tap.uuid, 'has uuid')
tap.ok(tap.dateString, 'has dateString')

const test = tap.test

test('uuid', (t) => {
  const valid = '6EA1FBC0-8A3E-492D-8145-A2143E225A6B'
  const invalid = '6EA1FBC0-8A3E-492D-8145-A2143E225A6'
  const tt = new tap.Test()
  t.ok(tt.uuid(valid), 'works for valid uuid')
  t.notOk(tt.uuid(invalid), 'asserts for invalid uuid')
  t.uuid(valid)
  t.end()
})

test('dateString', (t) => {
  const valid = '2016-05-27T13:42:42.048Z'
  const invalid = '2016-05-27T13:42:42.048'
  const tt = new tap.Test()
  t.ok(tt.dateString(valid), 'works for valid ISO Date String')
  t.notOk(tt.dateString(invalid), 'asserts for invalid ISO Date String')
  t.dateString(valid)
  t.end()
})
