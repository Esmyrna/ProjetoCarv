import React from "react"
import { Carousel } from "react-bootstrap"
import imagem1 from '../../../imagens/numanice.jpg'
import imagem2 from '../../../imagens/amore.jpg'
import imagem3 from '../../../imagens/bikini.jpg'
import imagem4 from '../../../imagens/carvladeira.png'
import styles from '../SlideMobile/GaleriaJogo.module.css'
import { useState } from 'react'

const GaleriaSlider = () => {

    // Pegando links de eventos //

    const [event1, setEvent1] = useState('https://www.ingresse.com/numanice-recife');
    const [event2, setEvent2] = useState('https://www.ingresse.com/reveillon-amore-23');
    const [event3, setEvent3] = useState('https://www.ingresse.com/bikini-memories');
    const [event4, setEvent4] = useState('https://www.ingresse.com/carvalheira-na-ladeira-23');

    return (

                            // Carrossel de Slides //
        <>
            <Carousel className={styles.slideJogo} indicators={false}>
                <Carousel.Item className={styles.CarouselItem} interval={3000}>
                    <a target="_blank" href={event1}>
                        <img
                            className={styles.imagem}
                            src={imagem1}
                            alt="First slide" />
                    </a>

                    <div className={styles.infoEventos}>
                        <h1>Numanice</h1>
                        <p>"Chegou a vez da gente pagodear forte, esquecer os problemas e ficar 100% nice com as canetadas da @ludmilla. E o pass pra você não perder esse dia por NA-DA está disponível a partir de JÁ.  O comentário é fod@, é o #Numanice na cidade! "</p>
                    </div>

                </Carousel.Item>
                <Carousel.Item interval={700}>
                    <a target="_blank" href={event2}>
                        <img
                            className={styles.imagem}
                            src={imagem2}
                            alt="Second slide" />
                    </a>

                    <div className={styles.infoEventos}>
                        <h1>Amoré</h1>
                        <p>"Em dezembro, a gente se encontra na Praia de Maracaípe, no Balneário de Porto de Galinhas-PE, para viver 5 dias e noites de muita diversão e receber 2023 com todo o amor do mundo."</p>
                    </div>

                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <a target="_blank" href={event3}>
                        <img
                            className={styles.imagem}
                            src={imagem3}
                            alt="Third slide" />
                    </a>

                    <div className={styles.infoEventos}>
                        <h1>Bikini</h1>
                        <p>"Tão inseparáveis quanto o mar e a areia e a gente e a resenha, é a abertura da melhor estação + o melhor feriado do ano. E se o verão tá pra brotar a gente já sabe que a previsão é de B!K!N!!!!!! E aí, brotos: partiu #BikiniMemories?"</p>
                    </div>

                </Carousel.Item>
                <Carousel.Item>
                    <a target="_blank" href={event4}>
                        <img
                            className={styles.imagem}
                            src={imagem4}
                            alt="Fourth slide" />
                    </a>

                    <div className={styles.infoEventos}>
                        <h1>Carvalheira na Ladeira</h1>
                        <p>"No ritmo da vontade de viver esses dias e pra fazer jus à terra dos gigantes. Com vocês, o line-up do #CarvalheiraNaLadeira2023. Dos dias 18 a 21/02 vamos viver o melhor CARNAVAL da história!"</p>
                    </div>

                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default GaleriaSlider
