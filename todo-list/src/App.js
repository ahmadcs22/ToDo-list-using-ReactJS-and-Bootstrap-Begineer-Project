
import './App.css';
import { Footer } from './MyComponents/Footer';
import { Header } from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import React, { useState } from 'react';

function App() {
  const onDelete = (todo) => {
    console.log("i am on delete",todo)
    setTodos(todos.filter((e) => {
      return e !== todo
    }));
  }
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Goto market",
      desc: "You need to got market"
    },
    {
      sno: 2,
      title: "Goto uni",
      desc: "You need to got uni"
    },
    {
      sno: 3,
      title: "Goto Flat",
      desc: "You need to got Flat"
    },
  ])
  return (
    <>
      <Header title={"Todo-App"} searchBar={false} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />

    </>
  );
}
export default App;