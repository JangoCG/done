import React, { Component } from 'react'
import '@atlaskit/css-reset'
import Task from './task'
import { Droppable } from 'react-beautiful-dnd'
import { ColumnContainer, Title, TaskList } from './styled'

class Column extends Component {
  render () {
    return (
      <ColumnContainer>
        <Title>{this.props.column.title}</Title>
        <Droppable droppableId={this.props.column.id}>
          {/* Droppable erwartet eine Function die als Children eine React Component returned */}
          {(provided, snapshot) => (
            <TaskList
              ref={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {this.props.tasks.map((task, index) => (
                <Task key={task.id} task={task} index={index} />
              ))}
              {provided.placeholder}
            </TaskList>
          )}
        </Droppable>
      </ColumnContainer>
    )
  }
}

export default Column
