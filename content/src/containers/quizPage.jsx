import React, { Component } from 'react'
import { readQuizById } from '../services/quiz.service'
import { VoicePlayer, VoiceRecognition } from 'react-voice-components'

export default class QuizPage extends Component {
    state = {
        play: false,
        continue: true,
        stop: false
    }

    componentDidMount(){
        readQuizById()
    }

    onResult = (obj) => {
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
            </div>
        )
    }
}