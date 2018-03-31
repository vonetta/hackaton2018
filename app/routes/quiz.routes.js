const router = require('express').Router()
const quizControllerFactory = require('../controllers/quiz.controller.js')

module.exports = apiPrefix => {
    const quizController = quizControllerFactory(apiPrefix)
    console.log(quizController)

    router.post('/api/quizzes/', quizController.create)

    return router
}
