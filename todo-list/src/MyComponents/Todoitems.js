import React from 'react'

export const Todoitems = ({todo,onDelete}) => {
  let todoStyle={
    width :"20%",
   
  }
  let imgStyle={
    padding : "3px",
    width : "100%"
  }
  return (
    // <div>
    //   <h4>{todo.title}</h4>
    //   <p>{todo.desc}</p>
    //   <button className="btn btn-danger btn-sm" onClick={()=>{onDelete(todo)}}>Delete</button>
    // </div>
    <>
    <div class="card" style={todoStyle}>
  <img src="https://source.unsplash.com/1200x1200/?task,box" className="card-img" style={imgStyle} alt="..."/>

  <div class="card-body">
    <h5 class="card-title">{todo.title}</h5>
    <p class="card-text">{todo.desc}</p>
    <button className="btn btn-danger btn-sm" onClick={()=>{onDelete(todo)}}>Delete</button>
  </div>
</div>
    </>
  )
}
