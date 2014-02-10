mongoobject
-----------
escapes `$` and `.` in object keys so you can store objects in MongoDB.


Installation
------------
```
npm install mongoobject
```

Usage
-----
```js
var mongoObject = require('mongoobject');

var objectToSaveInMongo = mongoObject.escape(myObject);
```

```js
var mongoObject = require('mongoobject');

var myObject = mongoObject.unescape(myObjectFromMongo);

```

You can also escape and unescape just one property name
```js
var escapedPropertyName = mongoobject.escapeKey('$mypropertyName');

var unescapedPropertyName = momgoobject.unescapeKey('\uff04myPropertyName');
```
