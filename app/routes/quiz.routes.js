const router = require("express").Router()
const quizControllerFactory = require("../controllers/quiz.controller.js")

const quizApiPrefix = "/api/quizzes"

module.exports = apiPrefix => {
  const quizController = quizControllerFactory(apiPrefix)

  router.post("/", quizController.create)
  router.get("/", quizController.read)

  return router
}
