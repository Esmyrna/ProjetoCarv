import './App.css';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Eventos from './pages/Eventos'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'
import Container from './components/layoutHome/Container'
import Navbar from './components/layoutHome/Nav/Navbar'
import Footer from './components/layoutHome/Footer/Footer'
 
import ContainerJogo from './components/layoutHome/Jogo/ContainerJogo'
import SobreCarv from './components/layoutHome/Sobre/SobreCarv'
import MelhoresMomentos from './components/layoutHome/Momentos/MelhoresMomentos';
import Ingresso from './pages/Ingresso'
import ScrollToTop from './components/ScrollToTop';
 
 

function App() {
  return (
    <>

      <Router>
        <Navbar />
       
   <Container customClass="min-height">   
      <ScrollToTop /> 
      <Routes>

      <Route exact path="/" element={<Home/>} />
       

      <Route  path="/eventos" element={<Eventos/>} />
       

      <Route  path="/sobre" element={<Sobre/>} />
   
 
      <Route  path="/contato" element={<Contato/>} />
      


      <Route path="/ingresso" element={<Ingresso/>}/>
    
 
 

    </Routes>
  
    </Container>
      <Footer />
   </Router>
    </>
  );
}

export default App;
