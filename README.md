# more-tap

[![Build Status](https://travis-ci.org/evanlucas/more-tap.svg)](https://travis-ci.org/evanlucas/more-tap)
[![Coverage Status](https://coveralls.io/repos/evanlucas/more-tap/badge.svg?branch=master&service=github)](https://coveralls.io/github/evanlucas/more-tap?branch=master)

Adds some additional tap assertions.

## Install

```bash
$ npm install [--save-dev] more-tap tap
```

## Test

```bash
$ npm test
```

## Usage

In your test file:

```js
'use strict'

const tap = require('tap')
require('more-tap')

tap.uuid('6EA1FBC0-8A3E-492D-8145-A2143E225A6B')
// or include your own message
tap.uuid('6EA1FBC0-8A3E-492D-8145-A2143E225A6B', 'should be uuid')

tap.dateString('2016-05-27T13:42:42.048Z')
// or include your own message
tap.dateString('2016-05-27T13:42:42.048Z', 'should be iso date string')
```

## Author

Evan Lucas

## License

MIT (See `LICENSE` for more info)
