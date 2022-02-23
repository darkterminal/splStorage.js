# splStorage.js
Simple LocalStorage Wrapper for CRUD

<a href="https://512kb.club"><img src="https://512kb.club/assets/images/green-team.svg" /></a>
![GitHub file size in bytes](https://img.shields.io/github/size/darkterminal/splStorage.js/splStorage.min.js?label=minified&style=for-the-badge)
![GitHub file size in bytes](https://img.shields.io/github/size/darkterminal/splStorage.js/splStorage.js?label=unminified&style=for-the-badge)
[![](https://data.jsdelivr.com/v1/package/gh/darkterminal/splStorage.js/badge)](https://www.jsdelivr.com/package/gh/darkterminal/splStorage.js)

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
