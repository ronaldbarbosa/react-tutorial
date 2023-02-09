import './App.css';
import HelloWorld from './components/HelloWorld';
import Pessoa from './components/Pessoa'

function App() {
  return (
    <div className="App">
      <h1>React App</h1>
      <p>Meu primeiro React App</p>
      <HelloWorld></HelloWorld>
      <Pessoa nome="Ronald" idade="27" profissao="Estagiário" foto="https://via.placeholder.com/150"></Pessoa>
    </div>
  );
}

export default App;
