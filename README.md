# splStorage.js
Simple LocalStorage Wrapper for CRUD

## Available Mehod
- `splStorageJs.isDefined(collection)` This code is checking to see if the collection is defined in local storage.
- `splStorageJs.collections(name)` This is a function that will return the collection of data that is stored in local storage.
- `splStorageJs.whereNotEqual(collection, key, value)` This code is filtering out the items in the collection that do not have the key equal to the value.
- `splStorageJs.whereEqual(collection, key, value)` This code is filtering the collection of objects by the key and value.
- `splStorageJs.insert(collection, data)` This is a function that inserts data into a collection.
- `splStorageJs.insert(collection, where[key, value], data[key, value])` This is a function that update data in a collection
- `splStorageJs.delete(collection, key, value)` This a function that delete data in a collection
- `splStorageJs.has(collection, key, value)` This a function that check data is exists or not in a collection

### Install
- unminified `https://cdn.jsdelivr.net/gh/darkterminal/splStorage.js@master/splStorage.js`
- minified `https://cdn.jsdelivr.net/gh/darkterminal/splStorage.js@master/splStorage.min.js`
