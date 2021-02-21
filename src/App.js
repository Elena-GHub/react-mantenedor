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

  selectUser = id => {
    this.setState({
      path: 'form',
      selectedUser: id,
    })
  }

  addNewUser = user => {
    axios.post('https://jsonplaceholder.typicode.com/users', user)
    .then(({ data }) => {
        const newData = this.state.data.concat(data)
        this.setState({
          data: newData,
          path: 'list',
        })
      })
  }

  createNewUser = () => {
    this.setState({ path: 'form' })
  }

  render() {
    const { path, data } = this.state
    return (
      <div className="App">
        {path === 'list' && <ViewList 
          createNewUser={this.createNewUser}
          handleClick={this.selectUser}
          data={data}
        />}
        {path === 'form' && <UserForm handleSubmit={this.addNewUser} />}
      </div>
    );
  }
}

export default App;
