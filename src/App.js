import React, { Component } from 'react';
import axios from 'axios'
import logo from './logo.svg';
import './App.css';
import UserForm from './components/UserForm'
import ViewList from './components/ViewList'

class App extends Component {
  state = {
    data: [],
    path: 'list',
  }

  constructor() {
    super()
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(({ data }) => this.setState({ data }))
  }

  render() {
    const { path, data } = this.state
    return (
      <div className="App">
        {path === 'list' && <ViewList data={data}/>}
        {path === 'form' && <UserForm />}
      </div>
    );
  }
}

export default App;
