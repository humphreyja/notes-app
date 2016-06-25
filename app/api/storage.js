import contacts from './json-api-spec-call.json'
var PouchDB = require('pouchdb')
var db = new PouchDB('contacts')

class ApiConnection {
  call () {
    return setTimeout(() => contacts, 100)
  }

  db.put(todo, function callback(err, result) {
    if (!err) {
      console.log('Successfully posted a todo!');
    }
  });

  load (data) {
    let dbKey = null
    let dbData = null
    data.data.foreach(function (value) {
      dbKey = value.type
      dbData = db.get(value.type)
      let parsedData = {
        id: value.id
      }

      // Load attributes
      for (var attrKey in value.attributes) {
        parsedData[attrKey] = value.attributes[attrKey]
      }

      // Load Relationship ids
      for (var relKey in value.relationships) {
        let ids = []
        for (var dataKey in value.relationships[relKey]) {
          ids.push(dataKey.id)
        }
        parsedData[relKey] = ids
      }

      dbData.push(parsedData)
    })

    db.put(dbKey, dbData)
  }

  getAll () {
    return store.getAll()
  }
}

exports.connection = ApiConnection
