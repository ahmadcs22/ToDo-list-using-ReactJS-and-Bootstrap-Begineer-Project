import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { About } from "./MyComponents/About";
import { Addtodo } from "./MyComponents/Addtodo";
import { Footer } from "./MyComponents/Footer";
import { Header } from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";

function App() {
  const [todos, setTodos] = useState([]);



  const onDelete = (todo) => {
    setTodos(todos.filter((e) => e.sno !== todo.sno));
  };

  const addTodo = (title, desc) => {
    const newTodo = {
      sno: todos.length + 1,
      title,
      desc,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <Router>
      <Header title="Todo-App" searchBar={true} />




      <Routes>
        <Route
          path="/"
          element={
            <>
              <Addtodo addtodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>




      
      <Footer />
    </Router>
  );
}

export default App;
