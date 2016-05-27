'use strict'

const tap = require('tap')

const uuidRE = new RegExp('^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-' +
  'fA-F0-9]{4}-[a-fA-F0-9]{12}$')

const dateRE = /^[\d]{4}\-[\d]{2}\-[\d]{2}T[\d]{2}:[\d]{2}:[\d]{2}\.[\d]{3}Z$/

// t.uuid('DADBB4D5-8462-4320-8C40-19C0F8F69A32')
tap.Test.prototype.addAssert('uuid', 1, function(a, message, extra) {
  if (uuidRE.test(a)) {
    return this.pass(message || `${a} is a uuid`, extra)
  }

  return this.fail(message || `Expected ${a} to be a uuid`, extra)
})

// t.dateString('2016-05-27T13:42:42.048Z')
tap.Test.prototype.addAssert('dateString', 1, function(a, message, extra) {
  if (dateRE.test(a)) {
    return this.pass(message || `${a} is a valid date string`, extra)
  }

  return this.fail(message || `Expected ${a} to be a valid date string`, extra)
})
