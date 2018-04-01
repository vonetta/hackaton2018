import React, { Component } from "react"
//import { readQuizzById } from '../services/quiz.service'
import { VoicePlayer, VoiceRecognition } from "react-voice-components"

export default class QuizPage extends Component {
  state = {
    continue: true,
    stop: false
  }

  onResult = obj => {
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
          text={this.state.question}
        />
        <VoiceRecognition
          onResult={this.onResult}
          continuous={this.state.continue}
          stop={this.state.stop}
          onStart={this.recog}
          onEnd={this.ender}
        />
      </div>
    )
  }
}
