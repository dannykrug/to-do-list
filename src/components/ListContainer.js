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

  createTask = () => {
    console.log('task')
  }

  componentDidMount() {
    this.fetchList()
  }

  render() {
    console.log(this.state, "state");
    return(
      <div>
        <MainList tasks={this.state.tasks}/>
        <form>
          <div>
            <label>Task:</label>
            <input type='text' name='name' placeholder='Name of Task'/>
          </div>
          <div>
            <label>Description:</label>
            <input type='text' name='name' placeholder='Describe the Task'/>
          </div>
          <div>
            <input type='submit' value='Add It To The List'/>
          </div>
        </form>
      </div>
    )
  }
}
