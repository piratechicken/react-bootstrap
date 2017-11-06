import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap-4.0.0-beta.2-dist/css/bootstrap.css'
import Button from './components/Button'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button title='First' />
        <Button title='Second' variation='primary' />
        <Button title='Third' variation='success' />
      </div>
    );
  }
}

export default App;
