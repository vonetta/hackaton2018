const router = require("express").Router()
const quizControllerFactory = require("../controllers/quiz.controller.js")

const quizApiPrefix = "/api/quizzes"

module.exports = apiPrefix => {
  const quizController = quizControllerFactory(apiPrefix)

  router.get("/", quizController.read)
  router.get("/:id([a-fA-F0-9]{24})", quizController.readById)
  router.post("/", quizController.create)

  return router
}
