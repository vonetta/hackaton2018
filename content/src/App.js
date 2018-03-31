import React, { Component } from 'react';
import './App.css';
import QuizForm from './containers/quizForm'
import dotenv from 'dotenv'
import {BrowserRouter, Route} from 'react-router-dom'
dotenv.config()
// import Hackers from './containers/Hackers'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route path="/" component={QuizForm} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
