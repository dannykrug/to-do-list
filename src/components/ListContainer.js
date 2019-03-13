import React, { Component } from 'react';
import MainList from './MainList';
const URL = 'http://localhost:3000/tasks';

export default class ListContainer extends Component {

  state = {
    tasks: []
  }

  fetchList = () => {
    fetch(URL)
    .then(res => res.json())
    .then(res => this.setState({
      tasks: res
    }))
  }

  componentDidMount() {
    this.fetchList()
  }

  render() {
    console.log(this.state, "state");
    return(
      <div>
        <MainList tasks={this.state.tasks}/>
      </div>
    )
  }
}
