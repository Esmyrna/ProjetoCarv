import styles from '../cssPages/Eventos.module.css'
import logoBaile from '../../imagens/logo_baile.png'
import logoCarva from '../../imagens/logo_carva.png'
import logoSaoJoao from '../../imagens/logoSaoJoao.png'
import logoBikini from '../../imagens/logo_bikini.png'
import logoMarca from '../../imagens/logo.png'
import GaleriaSlider from './GaleriaSlider'

function Eventos(){
    return(
      
         <section className={styles.divEventos}>
                <div className={styles.square}>
                     
                     <ul className={styles.logos}>
                            <li>
                            <img src={logoBaile} alt="" />
                            </li>
                            <li>
                            <img src={logoBaile} style={styles.img2} alt="" />
                            </li>
                            <li>
                            <img src={logoCarva} alt="" />
                            </li>
                            <li>
                            <img src={logoSaoJoao} alt="" />
                            </li>
                            <li>
                            <img src={logoCarva}  style={styles.img5} alt="" />
                            </li>
                            <li>
                            <img src={logoBikini} style={styles.img6} alt="" />
                            </li>
                       </ul>             
                     </div>
                       
                     <div className={styles.bannerEventos}>
                 <figure class={styles.baEv}>
                        <img class={styles.logomarca} src={logoMarca} alt="logo do evento"/>
                     </figure>
                    </div>     
                <div className={styles.titleEventos}>
                    <h1>CARVALHEIRA <span id={styles.pink}>NA LADEIRA</span></h1>
                        
                </div>
                <div className={styles.textEventos}>
                    <p>Viva uma experiênia única no carnaval de olinda! Há cinco anos, o Carvalheira na Ladeira atrai gente de todo o Brasil ao coração da folia de Pernambuco para cinco dias intensos de multiculturalidade, diversão e momentos inesquecíveis.</p>
                </div>

                <GaleriaSlider />
        </section>
       
    )
}

export default Eventos;