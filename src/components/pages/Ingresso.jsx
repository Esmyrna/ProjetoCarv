import styles from '../cssPages/Ingresso.module.css';
import Footer from '../layoutHome/Footer';
import bikini1 from '../../imagens/bikini1.jpg';
import amore03 from '../../imagens/amore03.jpg';
import ladeira02 from '../../imagens/ladeira02.jpg';
import React from 'react';

function Ingresso(){

 
    return(
        <>  <div>
        <h1 className={styles.h1Ingressos}>MERGULHE NESSA <span>EXPERIÊNCIA</span></h1>
    </div>

        <section className={styles.conteudo}>

          
            <div className={styles.responsiveIngressos}>   
                    <a>
                        <img className={styles.imgIngressos1} src={bikini1} alt=''/> 
                    </a>
                    <div className={styles.titleIngressos}>BIKINI</div>
                 
            </div>

            <div className={styles.responsiveIngressos}>   
                    <a >
                        <img className={styles.imgIngressos2} src={amore03} alt='' />
                    </a>
                    <div className={styles.titleIngressos}>RÉVEILLON AMORÉ 23 </div>
                
            </div>

            <div className={styles.responsiveIngressos}>
            <a> <img className={styles.imgIngressos3} src={ladeira02} alt='' />   </a>
            <div className={styles.titleIngressos}>
                   CARVALHEIRA NA LADEIRA
                  </div>   
           </div>

 
        </section>
        </>
    ) 
}

export default Ingresso;