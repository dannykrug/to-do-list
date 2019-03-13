import React, { Component } from 'react';
import ListItem from './ListItem';

export default class MainList extends Component {

  render() {
    let taskCards = this.props.tasks.map(task => <ListItem key={task.id} name={task.name} description={task.description} completed={task.completed} />)

    return(
      <div>
        <h1>Main List</h1>
          {taskCards}
      </div>
    )
  }
}
