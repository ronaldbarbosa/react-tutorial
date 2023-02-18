import './App.css';
import HelloWorld from './components/HelloWorld';
import Pessoa from './components/Pessoa'
import Lista from './components/Lista';
import Evento from './components/Evento';
import Form from './components/Form';
import Condicional from './components/Condicional';

function App() {
  return (
    <div className="App">
      <h1>React App</h1>
      <p>Renderização condicional</p>
      <Condicional />
    </div>
  );
}

export default App;
