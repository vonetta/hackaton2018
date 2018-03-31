"use strict"

const quizService = require('../services/quiz.service')
let _apiPrefix

module.exports = apiPrefix => {
    _apiPrefix = apiPrefix

    return {
        create: _create
    }
}

function _create(req, res) {
    quizService.create(req.body)
        .then(id => {
            const responseModel = new responses.ItemResponse()
            responseModel.item = id
            res.status(201)
                .location(`${apiPrifix}/${id}`)
                .json(responseModel)
        })
        .catch(err => {
            console.log(err)
            res.status(500).send(new responses.ErrorResponse(err))
        })
}
