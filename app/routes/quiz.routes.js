const router = require('express').Router()
const quizControllerFactory = require('../controllers/quiz.controller.js')

module.exports = apiPrefix => {
    const quizController = quizControllerFactory(apiPrefix)

    router.post('/', quizController.create)

    return router
}
