import styled from 'styled-components'

export const Sidebar = styled.nav`
  grid-area: nav;
  margin-left: 0.5rem;
  background-color: #f4f5f7;
  color: lightslategray;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  color: #;
  margin: 0px;
  border-right: 1px solid #e5e5e5;
`

export const Header = styled.header`
  grid-area: header;
  background-color: #ffffff;
  height: 2em;
  padding: 1rem 0;
  grid-area: header;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  border-bottom: 2px solid #e5e5e5;
  margin-bottom: 0px;
  font-size: 19px;
`

export const GridContainer = styled.div`
  display: grid;
  grid-template-areas:
    'header header header'
    'nav content side'
    'footer footer footer';
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto 1fr;
  /* grid-gap: 10px; */
  margin: 0;
  height: 100vh;
`

export const Main = styled.main`
  grid-area: content;
`
export const Aside = styled.aside`
  grid-area: side;
  margin-right: 0.5rem;
`

export const Footer = styled.footer``

export const Container = styled.div`
  display: flex;
  /* justify-content: space-between; */
  margin-right: 150px;
  margin-left: 50px;
`

// Column.js

export const ColumnContainer = styled.div`
  margin: 8px;
  /* margin-right: 50px; */
  border: 1px solid lightgrey;
  border-radius: 3px;
  width: 220px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex: 1;
`
export const Title = styled.p`
  padding: 8px;
  background-color: #f4f5f7;
  color: #5e6c84;
  text-transform: uppercase;
  font-size: small;
`

// this is the whole task list
export const TaskList = styled.div`
  padding: 8px;
  /* background-color: ${props =>
    props.isDraggingOver ? 'skyblue' : 'white'}; */
  flex-grow: 1;
  background-color: #f4f5f7;
  min-height: 100px;
`

// These are the actual tasks
export const TaskContainer = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  height: 3em;
  /* background-color: ${props =>
    props.isDragging ? 'lightgreen' : 'white'}; */
  background-color: white;
  diplay: flex;
  p:active {background-color:blue;}
`
