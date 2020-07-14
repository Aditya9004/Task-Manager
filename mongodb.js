// CRUD Operations

const {MongoClient,ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
MongoClient.connect(connectionURL, {useNewUrlParser : true,useUnifiedTopology: true}, (error,client) => {
    if(error) {
       return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)

   db.collection('users').deleteMany({
       age:23
    }).then((result) => {
        console.log(result)

    }).catch((error) => {
        console.log(error)
    })
})