import React from 'react'
import ReactDOM from 'react-dom'
const Content=(props)=>{
  <p>props.parts</p>
}
const App = () => {
  const course = 'Half Stack application development- Racheli Weunstein.'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
<Content/>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))