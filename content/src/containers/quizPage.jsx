import React, { Component } from 'react'
import { VoicePlayer, VoiceRecognition } from 'react-voice-components'

export default class QuizPage extends Component {
    state = {
        continue: true,
        stop: false,
    }

    start = (e) => {
        console.log(e)
    }

    end = (e) => {
        console.log(e)
    }

    recog = (e) => {
        console.log("Hello " + e)
    }

    ender = (e) => {
        console.log("Bye " + e)
    }

    onResult = (obj) => {
        console.log(obj.finalTranscript)
    }

    render() {
        return (
            <div>
                <VoicePlayer
                    play
                    lang="en-GB"
                    onStart={this.start}
                    onEnd={this.end}
                    text="Hello Alex, Do you need help?">
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