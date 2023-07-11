import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greetings="Mensaje de saludo inicial!! Hola mundo!!!" />
    </div>
  );
}

export default App;
