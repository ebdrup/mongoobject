mongoObject
-----------
escapes `$` and `.` in object keys so you can store objects in MongoDb.


Installation
------------
```
npm install mongoobject
```

Usage
-----
```js
var mongoObject = require('mongoobject');

var objectSafeToSaveInMongo = mongoObject.escape(myObject);
```

```js
var mongoObject = require('mongoobject');

var myObject = mongoObject.unescape(myObjectFromMongo);

```