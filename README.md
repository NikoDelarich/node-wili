# wili

[![npm](https://flat.badgen.net/npm/license/wili)](https://www.npmjs.org/package/wili)
[![npm](https://flat.badgen.net/npm/v/wili)](https://www.npmjs.org/package/wili)
[![CircleCI](https://flat.badgen.net/circleci/github/idleberg/node-wili)](https://circleci.com/gh/idleberg/node-wili)
[![David](https://flat.badgen.net/david/dep/idleberg/node-wili)](https://david-dm.org/idleberg/node-wili)
[![David](https://flat.badgen.net/david/dev/idleberg/node-wili)](https://david-dm.org/idleberg/node-wili?type=dev)

**English** | [Deutsch](README.de.md)

A Node wrapper for the Wiener Linien public transport API

## Installation

`yarn add wili || npm install wili`

## Prerequisites

You will need a valid API key to access Wiener Linien's real-time data, get it [here](https://www.wien.gv.at/formularserver2/user/formular.aspx?pid=3b49a23de1ff43efbc45ae85faee31db&pn=B0718725a79fb40f4bb4b7e0d2d49f1d1). 

## Usage

Use ES6 imports or `require()` to include the module:

```js
// ECMAScript Import
import WienerLinien from 'wili';

// CommonJS Require
const WienerLinien = require('wili');
```

Example usage in script:

```js
import WienerLinien from 'wili';

// The API key can be omitted when
// process.env.WIENER_LINIEN_API_KEY is set
const wl = new WienerLinien(API_KEY);

wl.trafficInfoList({ relatedLine: ['U2', 'U4', 'U6'] })
.then( data => {
  console.log(data.trafficInfos);
})
.catch( error => {
  console.error(error);
});
```

## API

### monitor

Usage: `monitor(rbl, [options])`

Returns real-time data for a station, including train information such as identifier or accessibility features.

#### Parameters:

#### `rbl`

Type: `String`, `Integer`, `Array`

RBL number (Rechnergestütztes Betriebsleitsystem - computer-aided operations control system), can be found this [website](https://till.mabe.at/rbl/?line=214433687&station=231116899)

##### `options.activeTrafficInfo`

Type: `String`, `Array`

Disruption type (`stoerungkurz`, `stoerunglang`, or `aufzugsinfo`)

### newsList

Usage: `newsList(options)`

Returns news, elevator maintenance and other information

#### Options

##### `options.relatedLine`

Type: `String`, `Integer`, `Array`

Train or bus number, e.g. U1, S7, 59A (case-insensitive)

##### `options.relatedStop`

Type: `String`, `Integer`, `Array`

Station ID

##### `options.name`

Type: `String`, `Array`

Information category, e.g `news` or `aufzugsservice`

### trafficInfoList

Usage: `trafficInfoList([options])`

Returns interruption of operations and elevator outage

#### Options

##### `options.relatedLine`

Type: `String`, `Integer`, `Array`

Train or bus number, e.g. U1, S7, 59A (case-insensitive)

##### `options.relatedStop`

Type: `String`, `Integer`, `Array`

Station ID

##### `options.name`

Type: `String`, `Array`

Disruption type (`stoerungkurz`, `stoerunglang`, or `aufzugsinfo`)

## License

This work is licensed under [The MIT License](https://opensource.org/licenses/MIT)

## Donate

You are welcome to support this project using [Flattr](https://flattr.com/submit/auto?user_id=idleberg&url=https://github.com/idleberg/node-wili) or Bitcoin `17CXJuPsmhuTzFV2k4RKYwpEHVjskJktRd`
