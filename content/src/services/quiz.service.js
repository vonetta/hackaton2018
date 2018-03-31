import axios from 'axios'

// const baseUrl = 'mongodb://mikeskids:sabio@ds125068.mlab.com:25068/speak-smart'
// axios.post(`${process.env.REACT_APP_BACKEND_ORIGIN}`, payload)

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
}
