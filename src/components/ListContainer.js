import React, { Component } from 'react';
import MainList from './MainList';
const URL = 'http://localhost:3000/tasks';

export default class ListContainer extends Component {

  state = {
    tasks: [],
    name: '',
    description: '',
    completed: false
  }

  fetchList = () => {
    fetch(URL)
    .then(res => res.json())
    .then(res => this.setState({
      tasks: res
    }))
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  createTask = (e) => {
    e.preventDefault()

    const name = this.state.name
    const description = this.state.description
    const completed = this.state.completed

    let data = {name, description, completed}

    fetch(URL, {
      method:"POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(data)
    })
  }

  componentDidMount() {
    this.fetchList()
  }

  render() {
    console.log(this.state.name, "state");
    return(
      <div>
        <MainList tasks={this.state.tasks}/>
        <form onSubmit={this.createTask}>
          <div>
            <label>Task:</label>
            <input type='text' name='name' placeholder='Name of Task' onChange={this.changeHandler}/>
          </div>
          <div>
            <label>Description:</label>
            <input type='text' name='description' placeholder='Describe the Task' onChange={this.changeHandler}/>
          </div>
          <div>
            <input type='submit' value='Add It To The List'/>
          </div>
        </form>
      </div>
    )
  }
}
