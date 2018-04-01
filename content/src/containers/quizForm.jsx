import React from "react"
import { Modal } from "react-bootstrap"
import { create } from "../services/quiz.service.js"

export default class QuizForm extends React.PureComponent {
    state = {
        formData: {
            category: null,
            questions: []
        },
        show: false,
        domQuestions: [],
        domPossibleAnswers: [],
        formQuestionData: {
            questionType: "",
            question: "",
            possibleChoices: [],
            correctAnswer: ""
        },
        answerCount: 0,
        numberOfQuestions: 0
    }

    handleClose = () => { this.setState({ show: false }) }

    handleShow = () => { this.setState({ show: true }) }

    submit = event => {
        event.preventDefault()
        const payload = {}
        payload.category = this.state.formData.category
        payload.questions = this.state.formData.questions

        // TODO: send payload to database
        create(payload)
            .then(result => { console.log(result) })
            .catch(err => { console.error(err) })
    }

    handleQuestionFormChange = event => {
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

    addQuestion = event => {
        this.setState(prevState => {
            const newFormData = { ...prevState.formData }
            const newDomQuestions = [...prevState.domQuestions]
            const formQuestionData = { ...prevState.formQuestionData }
            const newNumberOfQuestions = this.state.numberOfQuestions + 1

            if (formQuestionData.questionType === "multiple") {
                let choices = formQuestionData.possibleChoices.map(choice => {
                    return <p>{choice}</p>
                })

                newDomQuestions.push(
                    <div className="row" key={this.state.numberOfQuestions}>
                        <div className="col-sm-12">
                            <strong>Question # {newNumberOfQuestions}</strong>
                            <p>Question Type:  {formQuestionData.questionType}</p>
                            <p>Question:  {formQuestionData.question}</p>
                            <p>Correct Answer:  {formQuestionData.correctAnswer}</p>
                            <p>Possible Choices:</p>
                            {choices}
                        </div>
                    </div>)

                newFormData.questions.push({
                    questionType: formQuestionData.questionType,
                    question: formQuestionData.question,
                    possibleChoices: formQuestionData.possibleChoices,
                    correctAnswer: formQuestionData.correctAnswer
                })

                return {
                    formData: newFormData,
                    domQuestions: newDomQuestions,
                    numberOfQuestions: newNumberOfQuestions,
                    show: false,
                    formQuestionData: {
                        questionType: "",
                        question: "",
                        possibleChoices: [],
                        correctAnswer: ""
                    }
                }

            }

            // Have it appear to DOM
            newDomQuestions.push(
                <div className="row" key={this.state.numberOfQuestions}>
                    <div className="col-sm-12">
                        <strong>Question # {newNumberOfQuestions}</strong>
                        <p>Question Type:  {formQuestionData.questionType}</p>
                        <p>Question:  {formQuestionData.question}</p>
                        <p>Correct Answer:  {formQuestionData.correctAnswer}</p>
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
                domQuestions: newDomQuestions,
                numberOfQuestions: newNumberOfQuestions,
                show: false,
                formQuestionData: {
                    questionType: "",
                    question: "",
                    possibleChoices: [],
                    correctAnswer: ""
                }
            }
        })
    }

    handleFormChange = (event) => {
        // TODO:
        console.log(event.target.value)
    }

    addAnswer = () => {
        this.setState(prevState => {
            let newDomPossibleAnswers = [...prevState.domPossibleAnswers]
            let count = prevState.answerCount
            let newCount = count + 1

            newDomPossibleAnswers.push(
                <div key={this.state.answerCount} className="form-group">
                    <input name="possibleAnswer" onChange={(count) => { this.handleAnswerInput }} className="form-control possible-answer" type="text" placeholder="Answer" />
                    <label><input name="isCorrect" type="checkbox" /> Is correct</label>
                </div>
            )

            return {
                answerCount: newCount,
                domPossibleAnswers: newDomPossibleAnswers
            }
        })
    }

    questionTypeInput = (event) => {
        this.setState({
            formQuestionData: {
                questionType: event.target.value,
                question: "",
                possibleChoices: [],
                correctAnswer: ""
            },
        })
    }

    multipleChoice1 = (event) => {
        let input = event.target.value
        this.setState(prevState => {
            let newFormQuestionData = { ...prevState.formQuestionData }
            newFormQuestionData.possibleChoices[0] = input

            return {
                formQuestionData: newFormQuestionData
            }
        })
    }

    multipleChoice2 = (event) => {
        let input = event.target.value
        this.setState(prevState => {
            let newFormQuestionData = { ...prevState.formQuestionData }
            newFormQuestionData.possibleChoices[1] = input

            return {
                formQuestionData: newFormQuestionData
            }
        })
    }

    multipleChoice3 = (event) => {
        let input = event.target.value
        this.setState(prevState => {
            let newFormQuestionData = { ...prevState.formQuestionData }
            newFormQuestionData.possibleChoices[2] = input

            return {
                formQuestionData: newFormQuestionData
            }
        })
    }

    multipleChoice4 = (event) => {
        let input = event.target.value
        this.setState(prevState => {
            let newFormQuestionData = { ...prevState.formQuestionData }
            newFormQuestionData.possibleChoices[3] = input

            return {
                formQuestionData: newFormQuestionData
            }
        })
    }

    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <form onSubmit={this.submit} ref={ref => (this.formElement = ref)}>
                            <fieldset>
                                <div className="row">
                                    <div className="col-sm-6 offset-sm-3">
                                        <label htmlFor="category">Question</label>
                                        <input name="category" onChange={this.handleFormChange} className="form-control" type="text" placeholder="Category" />

                                        <div className="form-group">
                                            <button className="btn btn-primary" onClick={this.submit} style={{ marginRight: '5px' }} type="button">Submit</button>
                                            <button className="btn btn-info" onClick={this.handleShow} type="button">Add Question</button>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                    <div className="col-sm-6">
                        <h2>Questions</h2>
                        {this.state.domQuestions}
                    </div>

                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <form>
                            <label>Please select type of question</label>
                            <div>
                                <input type="radio" id="single"
                                    name="questionType" value="single" onClick={this.questionTypeInput} />
                                <label htmlFor="single">Single</label>

                                <input type="radio" id="multiple"
                                    name="questionType" value="multiple" onClick={this.questionTypeInput} />
                                <label htmlFor="multiple">Multiple</label>

                                <input type="radio" id="true/false"
                                    name="questionType" value="true/false" onClick={this.questionTypeInput} />
                                <label htmlFor="true/false">True/False</label>
                            </div>

                            {this.state.formQuestionData.questionType === 'single' && (
                                <div>
                                    <div className="form-group">
                                        <label htmlFor="singleQuestion">Question</label>
                                        <input onChange={this.handleQuestionFormChange} id="singleQuestion" type="text" className="form-control" name="question" placeholder="Question" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="correctAnswer">Correct Answer</label>
                                        <input onChange={this.handleQuestionFormChange} id="correctAnswer" type="text" className="form-control" name="correctAnswer" placeholder="Input correct answer" />
                                    </div>
                                </div>
                            )}

                            {this.state.formQuestionData.questionType === 'multiple' && (
                                <div>
                                    <div className="form-group">
                                        <label htmlFor="multipleQuestion">Question</label>
                                        <input onChange={this.handleQuestionFormChange} id="multipleQuestion" type="text" className="form-control" name="question" placeholder="Question" />
                                    </div>

                                    <div className="form-group">
                                        <label>Answers</label>
                                        <div className="form-group">
                                            <input onChange={this.multipleChoice1} type="text" name="answer" className="form-control" placeholder="Answer 1" />
                                            <input id="answer1" type="radio" name="correctAnswer" value={this.state.formQuestionData.possibleChoices[0]} onClick={this.handleQuestionFormChange} />
                                            <label htmlFor="answer1">This answer is correct</label>
                                        </div>
                                        <div className="form-group">
                                            <input onChange={this.multipleChoice2} type="text" name="answer" className="form-control" placeholder="Answer 2" />
                                            <input id="answer2" type="radio" name="correctAnswer" value={this.state.formQuestionData.possibleChoices[1]} onClick={this.handleQuestionFormChange} />
                                            <label htmlFor="answer2">This answer is correct</label>
                                        </div>
                                        <div className="form-group">
                                            <input onChange={this.multipleChoice3} type="text" name="answer" className="form-control" placeholder="Answer 3" />
                                            <input id="answer3" type="radio" name="correctAnswer" value={this.state.formQuestionData.possibleChoices[2]} onClick={this.handleQuestionFormChange} />
                                            <label htmlFor="answer3">This answer is correct</label>
                                        </div>
                                        <div className="form-group">
                                            <input onChange={this.multipleChoice4} type="text" name="answer" className="form-control" placeholder="Answer 4" />
                                            <input id="answer4" type="radio" name="correctAnswer" value={this.state.formQuestionData.possibleChoices[3]} onClick={this.handleQuestionFormChange} />
                                            <label htmlFor="answer4">This answer is correct</label>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {this.state.formQuestionData.questionType === 'true/false' && (
                                <div>
                                    <div className="form-group">
                                        <label htmlFor="true/falseQuestion">Question</label>
                                        <input onChange={this.handleQuestionFormChange} id="true/falseQuestion" type="text" className="form-control" name="question" placeholder="Question" />
                                    </div>
                                    <div className="form-group">
                                        <input type="radio" id="true"
                                            name="correctAnswer" value="true" onClick={this.handleQuestionFormChange} />
                                        <label htmlFor="true">True</label>
                                        <input type="radio" id="false"
                                            name="correctAnswer" value="false" onClick={this.handleQuestionFormChange} />
                                        <label htmlFor="false">False</label>
                                    </div>
                                </div>
                            )}

                        </form>

                        <button type="button" className="btn btn-success" onClick={this.addQuestion}>Add Question</button>
                        <button type="button" className="btn btn-danger" onClick={this.handleClose}>Cancel</button>
                    </Modal>
                </div>
            </div>
        )
    }
}
