import React, { PureComponent } from "react"
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"
import MLKPic from "../images/mlk.jpg"
import MathPic from "../images/math.jpg"
import SciencePic from "../images/science.jpg"
import LiteraturePic from "../images/literature.jpg"
import MusicPic from "../images/music.png"
import ArtPic from "../images/art.jpg"
import CulinaryPic from "../images/culinaryart.jpg"
import LogicPic from "../images/logic.jpg"

import "../App.css"

export default class PublicQuizzes extends PureComponent {
  render() {
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
                <img src={MLKPic} className="preFade" />
                <div className="overlay">
                  <div className="fadeText">History</div>
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
                <img src={MathPic} className="preFade" />
                <div className="overlay">
                  <div className="fadeText">Math</div>
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
                <img src={SciencePic} className="preFade" />
                <div className="overlay">
                  <div className="fadeText">Chemistry</div>
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
                <img src={LiteraturePic} className="preFade" />
                <div className="overlay">
                  <div className="fadeText">Literature</div>
                </div>
              </div>
              <div className="card-content camera-card">
                <p className="flow-text">7 Questions</p>
              </div>
            </div>
          </div>
        </div>
        <div className="rowC">
          <div className="col m3">
            <div className="card">
              <div className="card-image fadeContainer">
                <img src={MusicPic} className="preFade" />
                <div className="overlay">
                  <div className="fadeText">Music</div>
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
                <img src={ArtPic} className="preFade" />
                <div className="overlay">
                  <div className="fadeText">Art</div>
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
                <img src={CulinaryPic} className="preFade" />
                <div className="overlay">
                  <div className="fadeText">Culinary Arts</div>
                </div>
              </div>
              <div className="card-content camera-card">
                <p className="flow-text">9 Questions</p>
              </div>
            </div>
          </div>
          <div className="col m3">
            <div className="card">
              <div className="card-image fadeContainer">
                <img src={LogicPic} className="preFade" />
                <div className="overlay">
                  <div className="fadeText">Logic</div>
                </div>
              </div>
              <div className="card-content camera-card">
                <p className="flow-text">8 Questions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
