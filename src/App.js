import './App.css';
import HelloWorld from './components/HelloWorld';
import Pessoa from './components/Pessoa'
import Lista from './components/Lista';

function App() {
  return (
    <div className="App">
      <h1>React App</h1>
      <p>Meu primeiro React App</p>
      <HelloWorld />
      <Pessoa nome="Ronald" idade="27" profissao="Estagiário" foto="https://via.placeholder.com/150"></Pessoa>
      <hr/>
      <Lista />
    </div>
  );
}

export default App;
