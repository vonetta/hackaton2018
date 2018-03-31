import React, { Component } from 'react';
import './App.css';
import Homepage from './containers/homepage'
import { Navbar, NavItem, Nav, NavDropdown, MenuItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Route, Switch, Link } from 'react-router-dom'


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

              <LinkContainer to='/example2'>
                <NavItem>
                  Private Quizzes
                </NavItem>
              </LinkContainer>

              <LinkContainer to='/example3'>
                <NavItem>
                  Another Thing?
                </NavItem>
              </LinkContainer>

            </Nav>
            <Nav pullRight>
              <NavDropdown eventKey={3} title="USERNAME HERE" id="basic-nav-dropdown">
                <MenuItem>My Private Quizzes</MenuItem>
                <MenuItem>My Public Quizzes</MenuItem>
                <MenuItem divider />
                <MenuItem>Logout</MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route path='/' component={Homepage}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
