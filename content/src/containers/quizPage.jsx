import React, { Component } from "react"
import { readQuizById } from "../services/quiz.service"
import { VoicePlayer, VoiceRecognition } from "react-voice-components"

export default class QuizPage extends Component {
    state = {
        play: false,
        continue: true,
        stop: false,
        questions: []
    }

    componentDidMount() {
        readQuizById("5ac076c20352f22bd74a2e95")
            .then(response => {
                this.setState({
                    questions: response.questions
                })
            })
            .catch(err => {
                console.warn(err)
            })
    }

    onTextChange = event => {
        const target = event.target
        const name = target.name
        const value = target.value
    }

  onResult = obj => {
    console.log(obj.finalTranscript)
  }

    render() {
        return (
            <div>
                <VoicePlayer
                    play={this.state.play}
                    lang="en-GB"
                    onStart={this.start}
                    onEnd={this.end}
                    text={this.state.question}>
                </VoicePlayer>
                <VoiceRecognition
                    onResult={this.onResult}
                    continuous={this.state.continue}
                    stop={this.state.stop}
                    onStart={this.recog}
                    onEnd={this.ender}
                >
                </VoiceRecognition>
                <div className="container">
                    <div className="row">
                        <form>
                            {this.state.questions.map(item => {
                                return (
                                    <div key={item.index}>
                                        <div>
                                            <p>{item.question}</p>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label">Answer</label>
                                            <input className="form-control" type="text" />
                                        </div>
                                    </div>
                                )
                            }
                            )}
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
