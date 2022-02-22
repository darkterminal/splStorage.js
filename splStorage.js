const splStorageJs = {
    storage: null,
    isDefined: function(collection) {
        return localStorage.getItem(collection) !== null
    },
    collections: function(collection) {
        return JSON.parse(localStorage.getItem(collection))
    },
    whereNotEqual: function(collection, key, value) {
        let collections = JSON.parse(localStorage.getItem(collection))
        return collections.filter((item) => {
            return (item[key] != value)
        })
    },
    whereEqual: function(collection, key, value) {
        let collections = JSON.parse(localStorage.getItem(collection))
        return collections.filter((item) => {
            return (item[key] == value)
        })
    },
    insert: function(collection, data) {
        if (this.isDefined(collection)) {
            this.storage = JSON.parse(localStorage.getItem(collection))
        } else {
            this.storage = []
        }
        this.storage.push(data)
        localStorage.setItem(collection, JSON.stringify(this.storage))
    },
    update: function(collection, find, data) {
        let current = this.whereEqual(collection, find[0], find[1])[0]
        current[data[0]] = (data[1] === 'increment') ? (current[data[0]] + 1) : data[1]
        let others = this.whereNotEqual(collection, find[0], find[1])
        localStorage.setItem(collection, JSON.stringify([...[current], ...others]))
    },
    delete: function(collection, key, value) {
        let collections = this.whereNotEqual(collection, key, value)
        localStorage.setItem(collection, JSON.stringify(collections))
    },
    has: function(collection, key, value) {
        return (this.whereEqual(collection, key, value).length > 0)
    }
};
