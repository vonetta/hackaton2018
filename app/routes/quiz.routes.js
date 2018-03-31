const router = require('express').Router()
const quizController = require('../controllers/quiz.controller')

module.exports = router

router.post('api/quizzes/', quizController.create)