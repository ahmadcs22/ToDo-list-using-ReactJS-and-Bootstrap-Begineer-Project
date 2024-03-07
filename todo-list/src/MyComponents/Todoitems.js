import React from 'react'

export const Todoitems = ({todo,onDelete}) => {
  let todoStyle={
    width :"20%",
    backgroundColor:"rgb(192 226 229)"
   
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
    <div className="card" style={todoStyle}>
  <img src="https://source.unsplash.com/1200x1200/?task,box" className="card-img" style={imgStyle} alt='https://source.unsplash.com/1200x1200/?colors,box'/>

  <div className="card-body">
    <h5 className="card-title">{todo.title}</h5>
    <p className="card-text">{todo.desc}</p>
    <button className="btn btn-danger btn-sm" onClick={()=>{onDelete(todo)}}>Delete</button>
  </div>
</div>
    </>
  )
}
