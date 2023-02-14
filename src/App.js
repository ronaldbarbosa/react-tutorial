import './App.css';
import HelloWorld from './components/HelloWorld';
import Pessoa from './components/Pessoa'
import Lista from './components/Lista';
import Evento from './components/Evento';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <h1>React App</h1>
      <p>Testando Eventos</p>
      <Evento numero="1"/>
      <Form />
    </div>
  );
}

export default App;
