import React, { Component } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { TaskContainer } from './styled'

class Task extends Component {
  render () {
    return (
      <Draggable
        draggableId={this.props.task.id}
        index={this.props.index}
        // isDragDisabled={this.props.task.id === 'task-1'}
      >
        {(provided, snapshot) => (
          <TaskContainer
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
          >
            {this.props.task.content}
          </TaskContainer>
        )}
      </Draggable>
    )
  }
}

export default Task
