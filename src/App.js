import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserForm from './components/UserForm'
import ViewList from './components/ViewList'

class App extends Component {
  state = {
    path: 'list',
  }
  render() {
    const { path } = this.state
    return (
      <div className="App">
        {path === 'list' && <ViewList />}
        {path === 'form' && <UserForm />}
      </div>
    );
  }
}

export default App;
