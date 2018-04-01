import React, { Component } from 'react';
import './App.css';
import Homepage from './containers/homepage'
import { Navbar, NavItem, Nav, NavDropdown, MenuItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Route, Switch, Link } from 'react-router-dom'
import QuizPage from './containers/quizPage'
import QuizForm from './containers/quizForm'
import PublicQuizzes from './containers/public.quizzes'

class App extends Component {

  render() {
    return (
      <div className="App">

        <Navbar id="navbar" collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to='/'>Chime In</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>

              <LinkContainer to='/public-quizzes'>
                <NavItem>
                  Public Quizzes
                  </NavItem>
              </LinkContainer>

              <LinkContainer to='/quiz'>
                <NavItem>
                  Add Private Quiz
                </NavItem>
              </LinkContainer>

              <LinkContainer to='/quiz-page'>
                <NavItem>
                  Take Quiz
                </NavItem>
              </LinkContainer>

              <LinkContainer to='/example3'>
                <NavItem>
                  Grading
                </NavItem>
              </LinkContainer>

            </Nav>
            <Nav pullRight>
              <NavDropdown eventKey={3} title="USERNAME HERE" id="basic-nav-dropdown">
                <MenuItem>My Private Quizzes</MenuItem>
                <MenuItem>My Grades</MenuItem>
                <MenuItem divider />
                <MenuItem>Logout</MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        

        <Switch>
          <Route path="/quiz" component={QuizForm} />
          <Route path="/quiz-page" component={QuizPage} />
          <Route exact path='/' component={Homepage}></Route>
          <Route path="/public-quizzes" component={PublicQuizzes} />
        </Switch>
      </div>
    );
  }
}

export default App;