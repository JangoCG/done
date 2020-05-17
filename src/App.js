import React, { Component } from 'react'
import initialData from './initial-data'
import { DragDropContext } from 'react-beautiful-dnd'
import Column from './components/column'
import styled from 'styled-components'

const Container = styled.div`
  display:flex;
`

class App extends Component {
  state = initialData;

  onDragEnd = result => {
    document.body.style.color = 'inherit'
    const { destination, source, draggableId } = result

    // if there is no destination there is nothing to do
    if (!destination) return
    // if these 2 things are true the user dragged the item at the position of the start and there is nothing to do
    if (destination.droppableId === source.droppableId && destination.index === source.index) return

    // reorder the taskIds array
    const startColumn = this.state.columns[source.droppableId]
    const finishColumn = this.state.columns[destination.droppableId]

    if (startColumn === finishColumn) {
      const newTaskIds = Array.from(Column.taskIds)

      newTaskIds.splice(source.index, 1)
      newTaskIds.splice(destination.index, 0, draggableId)

      const newColumn = {
        ...Column,
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
      <DragDropContext
        onDragEnd={this.onDragEnd}
        onDragEnd={this.onDragEnd}
      >
        <Container>
          {this.state.columnOrder.map(columnId => {
            const column = this.state.columns[columnId]
            const tasks = column.taskIds.map(taskId => this.state.tasks[taskId])

            return <Column key={column.id} column={column} tasks={tasks} />
          })}
        </Container>

      </DragDropContext>
    )
  }
}

export default App
