"use strict"

const quizService = require("../services/quiz.service")
let _apiPrefix

module.exports = apiPrefix => {
  _apiPrefix = apiPrefix

  return {
    create: _create,
    read: read,
    readById: _readById
  }
}

function read(req, res) {
  quizService
    .read()
    .then(id => {
      res.status(200).json(id)
    })
    .catch(err => res.status(500).send(err))
}

function _readById(req, res){
  quizService.readById(req.params.category)
  .then(quiz => {
    res.status(200).json(quiz)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

function _create(req, res) {
  quizService
    .create(req.body)
    .then(id => {
      res.status(201).json(id)
    })
    .catch(err => {
      console.log(err)
      res.status(500).send(err)
    })
}
