import React from "react"
import { Carousel } from "react-bootstrap"
import Carva1 from '../imagens/Carva1.jpg'
import Carva2 from '../imagens/Carva2.jpg'
import EventoSlide1 from '../imagens/EventoSlide1.png'
import EventoSlide2 from '../imagens/EventoSlide2.png'
import EventoSlide3 from '../imagens/EventoSlide3.png'
import EventoSlide4 from '../imagens/EventoSlide4.png'
import EventoSlide5 from '../imagens/EventoSlide5.png'
import styles from '../components/cssPages/GaleriaEvento.module.css'

const GaleriaSlider = () => {

    // Carrossel da página de Eventos //
    return (
        <>

            <Carousel className={styles.slide} >
                <Carousel.Item interval={1000}>

                    <img
                        className="First Photo"
                        src={EventoSlide1}
                        alt="First slide" />

                </Carousel.Item>
                <Carousel.Item interval={700}>

                    <img
                        className="Second Photo"
                        src={EventoSlide2}
                        alt="Second slide" />

                </Carousel.Item>
                <Carousel.Item interval={500}>

                    <img
                        className="Third Photo"
                        src={EventoSlide3}
                        alt="Third slide" />

                </Carousel.Item>
                <Carousel.Item>

                    <img
                        className="Fourth Photo"
                        src={EventoSlide4}
                        alt="Fourth slide" />

                </Carousel.Item>

                <Carousel.Item>

                    <img
                        className="Fourth Photo"
                        src={EventoSlide5}
                        alt="Fourth slide" />

                </Carousel.Item>
            </Carousel>


        </>
    );
}

export default GaleriaSlider
