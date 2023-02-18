import './App.css';
import HelloWorld from './components/HelloWorld';
import Pessoa from './components/Pessoa'
import Lista from './components/Lista';
import Evento from './components/Evento';
import Form from './components/Form';
import Condicional from './components/Condicional';
import OutraLista from './components/OutraLista';
import { useState } from 'react';
import SeuNome from './components/SeuNome';
import Saudacao from './components/Saudacao.js';

function App() {
  const [nome, setNome] = useState()

  return (
    <div className="App">
      <h1>State Lift</h1>
      <SeuNome setNome={ setNome }/>
      <Saudacao nome={ nome }/>
    </div>
  );
}

export default App;
