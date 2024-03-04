// import logo from './logo.svg';
import './App.css';
import { Footer } from './MyComponents/Footer';
import { Header } from './MyComponents/Header';
// import { Todo } from './MyComponents/Todo';
import { Todos } from './MyComponents/Todos';

function App() {
  return (
    <>
      <Header />
      <Todos />
      <Footer />

    </>
  );
}
export default App;