import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route path="/sobre" element={ <Sobre /> } />
        <Route path="/contato" element={ <Contato /> } />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
