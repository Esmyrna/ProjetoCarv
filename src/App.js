import './App.css';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'
import Home from './components/pages/Home'
import Eventos from './components/pages/Eventos'
import Sobre from './components/pages/Sobre'
import Contato from './components/pages/Contato'
import Ingressos from './components/pages/Ingressos'
import Container from './components/layoutHome/Container'
import Navbar from './components/layoutHome/Navbar'
import Footer from './components/layoutHome/Footer'
import ContainerJogo from './components/layoutHome/ContainerJogo'
import SobreCarv from './components/layoutHome/SobreCarv'
import MelhoresMomentos from './components/layoutHome/MelhoresMomentos';
function App() {
  return (
    <>
      <Router>
        <Navbar />
       
   <Container customClass="min-height">   
      <Routes>
      <Route exact path="/" element={<Home/>}>
      </Route>

      <Route  path="/eventos" element={<Eventos/>}>
      </Route>

      <Route  path="/sobre" element={<Sobre/>}>
      </Route>

      <Route  path="/contato" element={<Contato/>}>
      </Route>

      <Route path="/ingressos" element={<Ingressos/>}>
      </Route>

    </Routes>
  
    </Container>
      <Footer />
   </Router>
    </>
  );
}

export default App;
