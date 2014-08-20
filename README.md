# Licenses Utilities

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
