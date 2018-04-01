const mongodb = require('../mongodb')
const conn = mongodb.connection
const ObjectId = mongodb.ObjectId

module.exports = {
    create: _create
}

function _create (payload) {
    console.log(payload)
    return conn.db().collection('public-quizzes').insertOne(payload)
        .then(result => result.insertedIds[0].toString())
        .catch(onError)
}

onError = (error) => {
    console.error(error)
}