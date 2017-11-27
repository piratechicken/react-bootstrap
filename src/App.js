import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './bootstrap-4.0.0-beta.2-dist/css/bootstrap.css'
import Button from './components/Button'
import Alert from './components/Alert'
import Progress from './components/Progress'
import { Card, CardItem } from './components/Card'
import { Nav, NavItem } from './components/Nav'
import { Form, FormItem } from './components/Form'

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
        </div>
          <Progress progress={ 2 } />
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
          <Form>
            <FormItem 
              type='email'
              labelText='Enter your email:'  
              id='form email'
              placeHolder='email@email.com'
            />
            <FormItem 
              type='password'
              labelText='Password:'  
              id='form passford'
              placeHolder='password'
            />
            <FormItem 
              type='text' 
              id='form text'
              placeHolder='there is no label for this one'
            />
            <FormItem 
              labelText='Text Area:'
              type='textarea' 
              id='form text area'
              placeHolder='this is a text area'
            />
          </Form>
      </div>
    );
  }
}

export default App;
