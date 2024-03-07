import './App.css';
import { About } from './MyComponents/About';
import { Addtodo } from './MyComponents/Addtodo';
import { Footer } from './MyComponents/Footer';
import { Header } from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
function App() {
  const [todos, setTodos] = useState([

  ]);

  const onDelete = (todo) => {
    console.log("i am on delete", todo);
    setTodos(todos.filter((e) => e.sno !== todo.sno));
  }

  const addtodo = (title, desc) => {
    let sno = todos.length + 1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
  }

  return (
    <>
       <Router>
      <>
        <Header title={"Todo-App"} searchBar={false} />
       

        <Routes>
          <Route exact path="/" Component={()=>{
            return (
              <>
               <Addtodo addtodo={addtodo} />
            <Todos todos={todos} onDelete={onDelete} /></>
            )
          }}>
          </Route>
          <Route exact path="/about" Component={()=>{
            return (
              <>
               <About />

              </>
            )
          }}>
          </Route>
        </Routes>
        <Footer />
      </>
    </Router>

    </>
  );
}

export default App;
