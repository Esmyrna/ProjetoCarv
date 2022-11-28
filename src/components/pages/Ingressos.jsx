import styles from '../cssPages/Ingressos.module.css';
import Footer from '../layoutHome/Footer';
import bikini1 from '../../imagens/bikini1.jpg';
import amore03 from '../../imagens/amore03.jpg';
import ladeira02 from '../../imagens/ladeira02.jpg';
import React from 'react';

function Ingressos(){

    let url = "https://www.ingresse.com/bikini-memories"
    let url2 = "https://www.ingresse.com/reveillon-amore-23"
    let url3 = "https://www.ingresse.com/carvalheira-na-ladeira-23"

    return(
        <section>

            <div>
                <h1 className={styles.h1Ingressos}>MERGULHE NESSA <span>EXPERIÊNCIA</span></h1>
            </div>

            <div className={styles.responsiveIngressos}>
                <div className={styles.galleryIngressos}>
                    <a>
                        <img src={bikini1} alt=''/> 
                    </a>
                    <div className={styles.descIngressos}>BIKINI</div>
                </div>
            </div>

            <div classname={styles.responsiveIngressos}>
                <div className={styles.galleryIngressos}>
                    <a >
                        <img className={styles.imgIngressos} src={amore03} alt='' />
                        <div className={styles.descIngressos}>RÉVEILLON AMORÉ 23</div>
                    </a>
                </div>
            </div>

            <div classname={styles.responsiveIngressos}>
                <div className={styles.galleryIngressos}>
                    <a>
                        <img className={styles.imgIngressos} src={ladeira02} alt='' />
                    </a>
                    <div className={styles.descIngressos}>CARVALHEIRA NA LADEIRA</div>
                </div>
           </div>
    
           <Footer />
        </section>

    ) 
}

export default Ingressos();



