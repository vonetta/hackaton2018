import React, { Component } from 'react';
import './App.css';
import Homepage from './containers/homepage'
import { Navbar, NavItem, Nav, NavDropdown, MenuItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Route, Switch, Link } from 'react-router-dom'
import QuizForm from './containers/quizForm'


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

              <LinkContainer to='/example1'>
                <NavItem>
                  Public Quizzes
                  </NavItem>
              </LinkContainer>

              <LinkContainer to='/quiz'>
                <NavItem>
                  Add Private Quiz
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
          <Route exact path='/' component={Homepage}></Route>
          <Route path="/quiz" component={QuizForm} />
        </Switch>
      </div>
    );
  }
}

export default App;