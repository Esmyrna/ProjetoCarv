import styles from '../components/cssPages/Sobre.module.css'
import sobreCarv from '../imagens/sobre-carvalheira.PNG'
import patrocinador1 from '../imagens/beefeater.png'
import patrocinador2 from '../imagens/logo-2.png'
import patrocinador3 from '../imagens/bet-nacional.png'
import Post from '../imagens/post.png'
import NumerosCarv from '../components/layoutHome/Seguidores/NumerosCarv'
import { Link } from 'react-router-dom'
function Sobre(){
    return(
        <section className={styles.sobre}>
            <div className={styles.bannerSobre}>
                <img src={sobreCarv} alt="" />
            </div>
            <div className={styles.titleSobre}>
                <h1>Conheça um pouco mais sobre a <br></br>
                nossa <span id={styles.pink}>historia</span>.
                </h1>
            </div>
            <div className={styles.textSobre}>
                <p>
                    Com 14 anos de mercado, a Carvalheira é uma agência especialista em desenvolver experiências junto ao público jovem e de espírito livre. Somos referência no Brasil em eventos que celebram os principais momentos do ano em grande estilo.
                </p>
                <p>
                    Ao longo da nossa história, várias marcas estiveram presentes em nossos eventos, entregando ao público experiências inesquecíveis aliado a um padrão de atendimento que ninguém tem igual. Nós criamos memórias. Entre em contato e saiba mais.

                    <div className={styles.btnCarv}>
                         <Link to="/contato"> <button id={styles.btnContact}>Contato </button> </Link> 
                 </div>
                </p>
            </div>
              
            
            <div className={styles.post}>
                <img id={styles.banner} src={Post} alt="Mais de 120 mil pessoas vivem nossa experiência" width="100%" height="500px" />
            </div>
            <NumerosCarv /> 
            <div className={styles.patrocinadores}>
                <h1>NOSSOS <span id={styles.pink}>PATROCINADORES</span></h1>  
            </div>
            <div className={styles.logoPatrocinadores}>
                <img src={patrocinador1} alt="" />
                <img src={patrocinador2} alt="" />
                <img src={patrocinador3} alt="" />
            </div>

        </section>

    )
}

export default Sobre;