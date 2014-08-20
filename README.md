# Licenses Utilities

[![Build Status](https://travis-ci.org/SamyPesse/licenses-utils.png?branch=master)](https://travis-ci.org/SamyPesse/licenses-utils)
[![NPM version](https://badge.fury.io/js/licenses-utils.svg)](http://badge.fury.io/js/licenses-utils)

This node package contains multiple utilies to manage licenses: detect, list, ...

### How to install it?

```
$ npm install licenses-utils
```

### How to use it?

Include the library:

```js
var licenses = require("licenses-utils");
```

Detect from a folder

```js
licenses.detectFolder("./project", function(err, license) {

});
```

Detect from a string

```js
var license = licenses.detect("...");
```

List all and return a specific one

```js
var all = licenses.list();

var mit = licenses.get("mit");
```
