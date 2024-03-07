import React from 'react'
import { Todoitems } from './Todoitems'
export const Todos = (props) => {
  let myStyle={
    minHeight:"70vh",
    margin: "40px auto",
  }
  return (
    <div className="container " style={myStyle}>
      <h3 className=' my-3'>Todos list</h3>
      {
       props.todos.length===0?<span className="badge rounded-pill text-bg-warning">No Todos To Display</span>: props.todos.map((todo) => {
        return (
          <>
          <Todoitems todo={todo} key={todo.sno} onDelete={props.onDelete}/> <hr />
          </>
        )
      }) 
      }

    </div>
  )
}
