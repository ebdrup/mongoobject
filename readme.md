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
var mongoobject = require('mongoobject');

var objectToSaveInMongo = mongoobject.escape(myObject);
```

```js
var mongoobject = require('mongoobject');

var myObject = mongoobject.unescape(myObjectFromMongo);

```

You can also escape and unescape just one property name
```js
var escapedPropertyName = mongoobject.escapeKey('$mypropertyName');

var unescapedPropertyName = momgoobject.unescapeKey('\uff04myPropertyName');
```
