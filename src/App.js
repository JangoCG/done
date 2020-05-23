import React, { Component } from 'react'
import initialData from './initial-data'
import { DragDropContext } from 'react-beautiful-dnd'
import Column from './components/column'
import Logo from './components/logo'
import './App.css'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Sidebar,
  Header,
  GridContainer,
  Main,
  Container,
  Footer
} from './components/styled'
import styled from 'styled-components'

const Ul = styled.ul`
  display: flex;
  flex-direction: row;
`

const Li = styled.li`
  list-style-type: none;
  flex: 1;
  border: 1px solid red;
  height: 30px;
`

class App extends Component {
  state = initialData

  handleOnDragEnd = result => {
    document.body.style.color = 'inherit'
    const { destination, source, draggableId } = result

    // if there is no destination there is nothing to do
    if (!destination) return
    // if these 2 things are true the user dragged the item at the position of the start and there is nothing to do
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    // reorder the taskIds array
    const startColumn = this.state.columns[source.droppableId]
    const finishColumn = this.state.columns[destination.droppableId]

    if (startColumn === finishColumn) {
      const newTaskIds = Array.from(startColumn.taskIds)

      newTaskIds.splice(source.index, 1)
      newTaskIds.splice(destination.index, 0, draggableId)

      const newColumn = {
        ...startColumn,
        taskIds: newTaskIds
      }

      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn
        }
      }

      this.setState(newState)
      return
    }

    // Moving item from one list to another list
    const startTaskIds = Array.from(startColumn.taskIds)
    startTaskIds.splice(source.index, 1)
    const newStart = {
      ...startColumn,
      taskIds: startTaskIds
    }

    const finishTaskIds = Array.from(finishColumn.taskIds)
    finishTaskIds.splice(destination.index, 0, draggableId)

    const newFinish = {
      ...finishColumn,
      taskIds: finishTaskIds
    }

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish
      }
    }

    this.setState(newState)
  }

  render () {
    return (
      <GridContainer>
        <header className='header'>
          <Logo />
          <ul className='menu'>
            <li className='flexItem'>Your Work</li>
            <li className='flexItem'>Your Work</li>
          </ul>
          <FontAwesomeIcon icon={faUserCircle} size='1x' />
        </header>

        <Sidebar>test schwall</Sidebar>
        <Main>
          <DragDropContext onDragEnd={this.handleOnDragEnd}>
            <Container>
              {this.state.columnOrder.map(columnId => {
                const column = this.state.columns[columnId]
                const tasks = column.taskIds.map(
                  taskId => this.state.tasks[taskId]
                )

                return <Column key={column.id} column={column} tasks={tasks} />
              })}
            </Container>
          </DragDropContext>
        </Main>
        {/* <Aside /> */}
        <Footer />
      </GridContainer>
    )
  }
}

export default App
