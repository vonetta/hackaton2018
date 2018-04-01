import React, { Component } from "react"
// import { Link } from "react-router-dom"
// import { Button } from "react-bootstrap"
import { readQuizByCategory } from '../services/quiz.service'
import { VoicePlayer, VoiceRecognition } from 'react-voice-components'
import MLKPic from "../images/mlk.jpg"
import MathPic from "../images/math.jpg"
import SciencePic from "../images/science.jpg"
import LiteraturePic from "../images/literature.jpg"
import MusicPic from "../images/music.png"
import ArtPic from "../images/art.jpg"
import CulinaryPic from "../images/culinaryart.jpg"
import LogicPic from "../images/logic.jpg"

import "../App.css"

export default class PublicQuizzes extends Component {
  state = {
    play: false,
    continue: true,
    stop: false,
    quizStart: false,
    recognize: false,
    questions: [],
    answers: []
  }

  getQuiz = (event) => {
    this.setState({ questions: [] })

    const target = event.target
    const name = target.id

    readQuizByCategory(name)
      .then(response => {
        console.log(response)
        this.setState({
          questions: response.questions,
          quizStart: true
        })
      })
      .catch(err => {
        console.warn(err)
      })
  }

  onResult = obj => {
    console.log(obj.finalTranscript)
    const response = "Did you say " + obj.finalTranscript
    this.setState({
      recognize: false,
      continuous: false,
      stop: true
    })
  }

  popArray = () => {
    this.setState(prevState => {
      const newState = { ...prevState }
      const questions = newState.questions.pop()
      return {
        questions: newState.questions,
        quizStart: true
      }
    })
  }

  render() {
    let player
    if (this.state.questions) {
      for (let i = 0; i < this.state.questions.length; i++) {
        player = (
          <VoicePlayer
            play={this.state.quizStart}
            lang="en-GB"
            onEnd={() => this.setState({ quizStart: false, recognize: true, continue: true, stop: false })}
            text={this.state.questions[i].question}>
          </VoicePlayer>)
      }
    }

    return (
      <div className="container">
        <h1
          className="App-title"
          style={{ textAlign: "center", fontFamily: "arial" }}
        >
          Public Quizzes
        </h1>
        <div className="rowC">
          <div className="col m3">
            <div className="card">
              <div className="card-image fadeContainer">
                <img src={MLKPic} className="preFade" alt="" />
                <div className="overlay">
                  <a onClick={this.getQuiz} href="">
                    <div id="history" className="fadeText">
                      History
                    </div>
                  </a>
                  {player}
                  {
                    this.state.recognize && (
                      <VoiceRecognition
                        onResult={this.onResult}
                        continuous={this.state.continue}
                        stop={this.state.stop}
                        onEnd={this.popArray}
                      >
                      </VoiceRecognition>
                    )
                  }
                </div>
              </div>
              <div className="card-content camera-card">
                <p className="flow-text">4 Questions</p>
              </div>
            </div>
          </div>
          <div className="col m3">
            <div className="card">
              <div className="card-image fadeContainer">
                <img src={MathPic} className="preFade" alt="" />
                <div className="overlay">
                  <a onClick={this.getQuiz} href="#">
                    <div id="math" className="fadeText">
                      Math
                    </div>
                  </a>
                </div>
              </div>
              <div className="card-content camera-card">
                <p className="flow-text">5 Questions</p>
              </div>
            </div>
          </div>
          <div className="col m3">
            <div className="card">
              <div className="card-image fadeContainer">
                <img src={SciencePic} className="preFade" alt="" />
                <div className="overlay">
                  <a onClick={this.getQuiz} href="#">
                    <div id="chemistry" className="fadeText">
                      Chemistry
                    </div>
                  </a>
                </div>
              </div>
              <div className="card-content camera-card">
                <p className="flow-text">5 Questions</p>
              </div>
            </div>
          </div>
          <div className="col m3">
            <div className="card">
              <div className="card-image fadeContainer">
                <img src={LiteraturePic} className="preFade" alt="" />
                <div className="overlay">
                  <a onClick={this.getQuiz} href="#">
                    <div id="literature" className="fadeText">
                      Literature
                    </div>
                  </a>
                </div>
              </div>
              <div className="card-content camera-card">
                <p className="flow-text">5 Questions</p>
              </div>
            </div>
          </div>
        </div>
        <div className="rowC">
          <div className="col m3">
            <div className="card">
              <div className="card-image fadeContainer">
                <img src={MusicPic} className="preFade" alt="" />
                <div className="overlay">
                  <a onClick={this.getQuiz} href="#">
                    <div id="music" className="fadeText">
                      Music
                    </div>
                  </a>
                </div>
              </div>
              <div className="card-content camera-card">
                <p className="flow-text">4 Questions</p>
              </div>
            </div>
          </div>
          <div className="col m3">
            <div className="card">
              <div className="card-image fadeContainer">
                <img src={ArtPic} className="preFade" alt="" />
                <div className="overlay">
                  <a onClick={this.getQuiz} href="#">
                    <div id="art" className="fadeText">
                      Art
                    </div>
                  </a>
                </div>
              </div>
              <div className="card-content camera-card">
                <p className="flow-text">5 Questions</p>
              </div>
            </div>
          </div>
          <div className="col m3">
            <div className="card">
              <div className="card-image fadeContainer">
                <img src={CulinaryPic} className="preFade" alt="" />
                <div className="overlay">
                  <a onClick={this.getQuiz} href="#">
                    <div id="culinaryArts" className="fadeText">
                      Culinary Arts
                    </div>
                  </a>
                </div>
              </div>
              <div className="card-content camera-card">
                <p className="flow-text">4 Questions</p>
              </div>
            </div>
          </div>
          <div className="col m3">
            <div className="card">
              <div className="card-image fadeContainer">
                <img src={LogicPic} className="preFade" alt="" />
                <div className="overlay">
                  <a onClick={this.getQuiz} href="#">
                    <div id="philosophy" className="fadeText">
                      Philosophy
                    </div>
                  </a>
                </div>
              </div>
              <div className="card-content camera-card">
                <p className="flow-text">4 Questions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
