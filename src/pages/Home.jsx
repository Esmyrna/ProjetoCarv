import videoCarvalheira from '../MidiasCarv/media/carvideo.mp4'

import Container from '../components/layoutHome/Container'
import VideoIntro from '../components/layoutHome/Video/VideoIntro'
import ContainerJogo from '../components/layoutHome/Jogo/ContainerJogo'
import SobreCarv from '../components/layoutHome/Sobre/SobreCarv'
import NumerosCarv from '../components/layoutHome/Seguidores/NumerosCarv'
import MelhoresMomentos from '../components/layoutHome/Momentos/MelhoresMomentos'
import Spotify from '../components/layoutHome/Spotify/Spotify'
import Final from '../components/layoutHome/FinalHome/Final'


// Todos os componentes da Home - Página principal //


function Home() {


   return (
      <Container>
         <VideoIntro />
         <ContainerJogo />
         <SobreCarv />
         <NumerosCarv />
         <MelhoresMomentos />
         <Spotify />
         <Final />
      </Container>
   )
}

export default Home;