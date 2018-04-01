import axios from 'axios'

export function readQuizById(category) {
    return axios.get(`${process.env.REACT_APP_BACKEND_ORIGIN}/api/quizzes/${category}`)
        .then(onSuccess)
        .catch(onError)
}

export function create(payload) {
    return axios.post(`${process.env.REACT_APP_BACKEND_ORIGIN}/api/quizzes/`, payload)
        .then(onSuccess)
        .catch(onError)
}

function onSuccess(response) {
    return response.data
}

function onError(error) {
    console.error(error)
    return Promise.reject(error)
}
