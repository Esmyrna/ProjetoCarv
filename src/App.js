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
<<<<<<< HEAD
import ContainerJogo from './components/layoutHome/ContainerJogo'
import SobreCarv from './components/layoutHome/SobreCarv'
import MelhoresMomentos from './components/layoutHome/MelhoresMomentos';
import Ingresso from '../../Carvalheira/src/components/pages/Ingresso'

=======
>>>>>>> 40b92d7738299e208201520c9f839c238d9a528d

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
<<<<<<< HEAD
      <Route  path="/contato" element={<Contato/>}>
      
 
      </Route>


      <Route path="/ingresso" element={<Ingresso/>}>
=======

      <Route  path="/contato" element={<Contato/>}>
>>>>>>> 40b92d7738299e208201520c9f839c238d9a528d
      </Route>

      <Route path="/Ingressos" element={<Ingressos/>}>
      </Route>

    </Routes>
  
    </Container>
      <Footer />
   </Router>
    </>
  );
}

export default App;
