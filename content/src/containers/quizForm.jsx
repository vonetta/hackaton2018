import React from 'react'
import { Modal } from 'react-bootstrap'
import { create } from '../services/quiz.service.js'
// TODO: service

export default class QuizForm extends React.PureComponent {
    state = {
        formData: {
            quizName: null,
            subject: "Programming",
            questions: []
        },
        show: false,
        submitted: false,
        domQuestions: [],
        formQuestionData: {
            questionType: "Multiple",
            question: "",
            correctAnswer: ""
        }
    }

    handleClose = () => {
        this.setState({ show: false })
    }

    handleShow = () => {
        this.setState({ show: true })
    }

    submit = () => {
        // const payload = this.state.formData
        this.setState({ submitted: true })

        // TODO: send payload to database
        console.log(this.state.formData)
        create(this.state.formData)
    }

    handleChange = (event) => {
        let input = event.target.value
        let propertyName = event.target.name

        this.setState(prevState => {
            const newFormQuestionData = { ...prevState.formQuestionData }
            newFormQuestionData[propertyName] = input
            return {
                formQuestionData: newFormQuestionData
            }
        })
    }

    addQuestion = (event) => {
        let formQuestionData = this.state.formQuestionData
        this.setState(prevState => {
            const newFormData = { ...prevState.formData }
            const newDomQuestions = [...prevState.domQuestions]

            // Have it appear to DOM
            newDomQuestions.push(
                <div className="row">
                    <div className="col-sm-12">
                        <p>{formQuestionData.questionType}</p>
                        <p>{formQuestionData.question}</p>
                        <p>{formQuestionData.correctAnswer}</p>
                    </div>
                </div>
            )

            // Add to payload
            newFormData.questions.push({
                questionType: formQuestionData.questionType,
                question: formQuestionData.question,
                correctAnswer: formQuestionData.correctAnswer
            })

            return {
                formData: newFormData,
                domQuestions: newDomQuestions
            }
        })
    }

    render() {

        return (
            <div className="row">
                <div className="col-sm-12">
                    <form>
                        <fieldset>
                            <div className="row">
                                <div className="col-sm-12">
                                    <label>Quiz Name:
                                        <input className="form-control" type="text" placeholder="Quiz Name" />
                                    </label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <legend>List of Questions</legend>
                                    <button className="btn btn-info" onClick={this.handleShow} type="button">Add Question</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    {this.state.questions}
                                </div>
                            </div>
                        </fieldset>
                        <div>
                            <button onClick={this.submit} type="button">Submit</button>
                        </div>
                    </form>
                </div>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <form>
                        <label htmlFor="questionType">Question Type</label>
                        <select name="questionTypeChange" onClick={this.handleChange} className="form-control">
                            <option value="Multiple">Multiple</option>
                            <option value="Boolean">True/False</option>
                            <option value="Single">Single</option>
                        </select>

                        <label htmlFor="question">Question</label>
                        <input name="question" onChange={this.handleChange} className="form-control" type="text" placeholder="Question" />

                        <label htmlFor="correctAnswer">Correct Answer</label>
                        <input name="correctAnswer" onChange={this.handleChange} className="form-control" type="text" placeholder="Correct Answer" />
                    </form>

                    <button type="button" className="btn btn-success" onClick={this.addQuestion}>Add Question</button>
                    <button type="button" className="btn btn-danger" onClick={this.cancelQuestion}>Cancel</button>
                </Modal>
            </div>
        )
    }
}