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
  
  updateUser = (id, values) => {
    axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, values)
    .then(() => {
      const newData = this.state.data.map(x => x.id === id ? values : x)
      this.setState({
        data: newData,
        path: 'list',
      })
    })
  }

  createNewUser = () => {
    this.setState({ path: 'form', selectedUser: undefined })
  }

  render() {
    const { path, data, selectedUser } = this.state
    const initialValues = selectedUser && data.find(x => x.id === selectedUser)
    return (
      <div className="App">
        {path === 'list' && <ViewList 
          createNewUser={this.createNewUser}
          handleClick={this.selectUser}
          data={data}
        />}
        {path === 'form' && <UserForm 
          initialValues={initialValues || {}}
          handleSubmit={this.addNewUser}
          handleUpdate={this.updateUser}
        />}
      </div>
    );
  }
}

export default App;
