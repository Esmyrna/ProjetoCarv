import './App.css';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'
import Home from './components/pages/Home'
import Eventos from './components/pages/Eventos'
import Sobre from './components/pages/Sobre'
import Contato from './components/pages/Contato'
import Container from './components/layoutHome/Container'
import Navbar from './components/layoutHome/Navbar'
import Footer from './components/layoutHome/Footer'
 
import ContainerJogo from './components/layoutHome/ContainerJogo'
import SobreCarv from './components/layoutHome/SobreCarv'
import MelhoresMomentos from './components/layoutHome/MelhoresMomentos';
import Ingresso from './components/pages/Ingresso'
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
