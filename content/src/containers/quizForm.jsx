import React from "react"
import { Modal } from "react-bootstrap"
import { create } from "../services/quiz.service.js"

export default class QuizForm extends React.PureComponent {
    state = {
        formData: {
            quizName: null,
            questions: []
        },
        show: false,
        submitted: false,
        domQuestions: [],
        domPossibleAnswers: [],
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

    submit = event => {
        event.preventDefault()
        const payload = this.state.formData
        this.setState({ submitted: true })

        // TODO: send payload to database
        console.log(this.state.formData)
        // https://firebase.google.com/docs/database/admin/save-data
        create(this.state.formData)
    }

    handleChange = event => {
        let input = event.target.value
        let propertyName = event.target.name

        this.setState(prevState => {
            const newFormQuestionData = { ...prevState.formData }
            newFormQuestionData[propertyName] = input
            return {
                formData: newFormQuestionData
            }
        })
    }

    addQuestion = event => {
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

    addAnswer = () => {
        this.setState(prevState => {
            let newDomPossibleAnswers = [...prevState.domPossibleAnswers]

            newDomPossibleAnswers.unshift(
                <div className="form-group">
                    <input name="question" onChange={this.handleChange} className="form-control possible-answer" type="text" placeholder="Answer" />
                    <label><input name="isCorrect" type="checkbox" /> Is correct</label>
                </div>
            )

            return {
                domPossibleAnswers: newDomPossibleAnswers
            }
        })
    }

    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <form onSubmit={this.submit} ref={ref => (this.formElement = ref)}>
                            <fieldset>
                                <div className="row">
                                    <div className="col-sm-6 offset-sm-3">
                                        <label htmlFor="category">Question</label>
                                        <input name="category" onChange={this.handleChange} className="form-control" type="text" ref={question => this.inputQuestion = question} placeholder="Category" />
                                    </div>
                                </div>
                            </fieldset>
                            <button onClick={this.submit} className="mr-10" type="button">Submit</button>
                            <button onClick={this.handleShow} type="button">Add Question</button>
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

                            <div className="form-group">
                                <label htmlFor="possibleAnswers" className="control-label">Possible Answers</label>
                                <button type="button" className="btn btn-primary pull-right" onClick={this.addAnswer}> <i class="fa fa-plus"></i> Add an answer</button>
                                {this.state.domPossibleAnswers}
                            </div>

                            <label htmlFor="correctAnswer">Correct Answer</label>
                            <input name="correctAnswer" onChange={this.handleChange} className="form-control" type="text" placeholder="Correct Answer" />
                        </form>

                        <button type="button" className="btn btn-success" onClick={this.addQuestion}>Add Question</button>
                        <button type="button" className="btn btn-danger" onClick={this.handleClose}>Cancel</button>
                    </Modal>
                </div>
            </div>
        )
    }
}
