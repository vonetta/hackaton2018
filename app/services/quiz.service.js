const mongodb = require("../mongodb")
const conn = mongodb.connection
const ObjectId = mongodb.ObjectId

module.exports = {
  create: _create,
  read: read
}

function read() {
  return conn
    .db()
    .collection("public-quizzes")
    .find({})
    .toArray()
    .then(quizzes => {
      for (let i = 0; i < quizzes.length; i++) {
        let quiz = quizzes[i]
        quiz._id = quiz._id.toString()
      }
      return quizzes
    })
    .catch(err => {
      return Promise.reject(err)
    })
}

function _create(payload) {
  console.log(payload)
  const doc = {
    questions: payload.questions,
    quizName: payload.quizName
  }

  return conn
    .db()
    .collection("public-quizzes")
    .insertOne(doc)
    .then(result => result.insertedId.toString())
    .catch(err => {
      return Promise.reject(err)
    })
}
