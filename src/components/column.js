import React, { Component } from 'react'
import '@atlaskit/css-reset'
import styled from 'styled-components'
import Task from './task'
import { Droppable } from 'react-beautiful-dnd'

const Container = styled.div`
margin: 8px;
border: 1px solid lightgrey;
border-radius: 2px;
width: 220px;
display: flex;
flex-direction: column;
`
const Title = styled.h3`
padding: 8px;
`
const TaskList = styled.div`
padding: 8px;
background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'white')};
flex-grow: 1;
${''}
min-height: 100px;
`

class Column extends Component {
  render () {
    return (
      <Container>
        <Title>{this.props.column.title}</Title>
        <Droppable droppableId={this.props.column.id}>
          {/* Droppable erwartet eine Function die als Children eine React Component returned */}
          {(provided, snapshot) => (
            <TaskList
              ref={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {this.props.tasks.map((task, index) => <Task key={task.id} task={task} index={index} />)}
              {provided.placeholder}
            </TaskList>

          )}

        </Droppable>
      </Container>
    )
  }
}

export default Column