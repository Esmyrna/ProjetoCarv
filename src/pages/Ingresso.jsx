import styles from '../components/cssPages/Ingresso.module.css';
import Footer from '../components/layoutHome/Footer/Footer';
import bikini1 from '../imagens/bikini1.jpg';
import amore03 from '../imagens/amore03.jpg';
import ladeira02 from '../imagens/ladeira02.jpg';
import React from 'react';
import { useState } from 'react';

function Ingresso() {

    // Pegando Links da página de Ingresso //

    const [event1, setEvent1] = useState('https://www.ingresse.com/numanice-recife');
    const [event2, setEvent2] = useState('https://www.ingresse.com/reveillon-amore-23');
    const [event3, setEvent3] = useState('https://www.ingresse.com/carvalheira-na-ladeira-23');

    // Página de Ingressos //

    return (
        <>  <div>
            <h1 className={styles.h1Ingressos}>MERGULHE NESSA <span>EXPERIÊNCIA</span></h1>
        </div>

            <section className={styles.conteudo}>

                <div className={styles.responsiveIngressos}>
                    <a href={event1}>
                        <img className={styles.imgIngressos1} src={bikini1} alt='' />
                    </a>
                    <div className={styles.titleIngressos}>BIKINI</div>
                </div>

                <div className={styles.responsiveIngressos}>
                    <a href={event2}>
                        <img className={styles.imgIngressos2} src={amore03} alt='' />
                    </a>
                    <div className={styles.titleIngressos}>RÉVEILLON AMORÉ 23 </div>
                </div>

                <div className={styles.responsiveIngressos}>
                    <a href={event3} >
                        <img className={styles.imgIngressos3} src={ladeira02} alt='' />
                    </a>
                    <div className={styles.titleIngressos}>
                        CARVALHEIRA NA LADEIRA
                    </div>
                </div>
                
            </section>
        </>
    )
}

export default Ingresso;