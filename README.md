# wili

[![npm](https://flat.badgen.net/npm/license/wili)](https://www.npmjs.org/package/wili)
[![npm](https://flat.badgen.net/npm/v/wili)](https://www.npmjs.org/package/wili)
[![CI](https://img.shields.io/github/workflow/status/idleberg/node-wili/CI?style=flat-square)](https://github.com/idleberg/node-wili/actions)
[![David](https://flat.badgen.net/david/dep/idleberg/node-wili)](https://david-dm.org/idleberg/node-wili)

**English** | [Deutsch](README.de.md)

A Node wrapper for the Wiener Linien public transport API

## Installation

`yarn add wili || npm install wili`

## Prerequisites

**Note:** As of November 2019, a valid API key to access Wiener Linien's real-time data is no longer required. However, if you obtained a key before, you can continue using it.

## Usage

Example usage in script:

```js
import { WienerLinien } from 'wili';

const wili = new WienerLinien();

const options = {
  relatedLine: ['U2', 'U4', 'U6']
};

// Promise API
wili.trafficInfoList(options)
  .then( data => {
    console.log(data.trafficInfos);
  })
  .catch( error => {
    console.error(error);
  });

// async/await
try {
  let data = await wili.trafficInfoList(options);
  console.log(data.trafficInfos);
} catch (output) {
  console.error(error);
}
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
