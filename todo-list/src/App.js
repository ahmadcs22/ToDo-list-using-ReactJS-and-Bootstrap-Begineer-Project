
import './App.css';
import { Footer } from './MyComponents/Footer';
import { Header } from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
let todos=[
 {
  sno:1,
  title:"Goto market",
  desc:"You need to got market"
 },
 {
  sno:2,
  title:"Goto uni",
  desc:"You need to got uni"
 },
 {
  sno:1,
  title:"Goto Flat",
  desc:"You need to got Flat"
 },
]
const onDelete=(todo)=>{
console.log("i am on delete",todo)
}
function App() {
  return (
    <>
      <Header title={"Todo-App"} searchBar={false} />
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer />

    </>
  );
}
export default App;