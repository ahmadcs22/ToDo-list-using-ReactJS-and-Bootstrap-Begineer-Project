
import './App.css';
import { Footer } from './MyComponents/Footer';
import { Header } from './MyComponents/Header';

import { Todos } from './MyComponents/Todos';

function App() {
  return (
    <>
      <Header title={"Todo-App"} searchBar={true} />
      <Todos />
      <Footer />

    </>
  );
}
export default App;