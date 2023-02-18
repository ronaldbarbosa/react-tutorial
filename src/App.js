import './App.css';
import HelloWorld from './components/HelloWorld';
import Pessoa from './components/Pessoa'
import Lista from './components/Lista';
import Evento from './components/Evento';
import Form from './components/Form';
import Condicional from './components/Condicional';
import OutraLista from './components/OutraLista';

function App() {
  const meusItens = ['React', 'Angular', 'Vue']

  return (
    <div className="App">
      <h1>Renderização de listas</h1>
      <OutraLista itens={ ['React', 'Angular', 'Vue'] }/>
      <OutraLista itens={[]} />
    </div>
  );
}

export default App;
