const mongodb = require('../mongodb')
const conn = mongodb.connection
const ObjectId = mongodb.ObjectId

module.exports = {
    create: create
}

create = (payload) => {
    return conn.db().collection('public-quizzes').insert(payload)
        .then(result => result.insertedIds[0].toString())
        .catch(onError)
}

onError = (error) => {
    console.error(error)
}