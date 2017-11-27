import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './bootstrap-4.0.0-beta.2-dist/css/bootstrap.css'
import Button from './components/Button'
import Alert from './components/Alert'
import { Card, CardItem } from './components/Card'
import { Nav, NavItem } from './components/Nav'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='mt-3'>
          <Button title='Google' href='https://www.google.com/' />
          <Button title='Second' variation='primary' />
          <Button title='Third' variation='success' />
        </div>
        <div className='mt-3'>
          <Nav>
            <NavItem>First</NavItem>
            <NavItem active={ true }>Second</NavItem>
            <NavItem>Third</NavItem>
          </Nav>
          <Alert subClass='primary'>
            OMFG!!!
          </Alert>
          <Alert subClass='secondary'>
            OMFG!!!
          </Alert>
          <Alert subClass='danger'>
            OMFG!!!
          </Alert>
          <Card>
            <CardItem subClass='title'>Title</CardItem>
            <CardItem subClass='text'>...T E X T...</CardItem>
          </Card>
        </div>
      </div>
    );
  }
}

export default App;
