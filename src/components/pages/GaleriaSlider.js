import React from "react"
import { Carousel } from "react-bootstrap"
import Carva1 from '../../imagens/Carva1.jpg'
import Carva2 from '../../imagens/Carva2.jpg'
import styles from '../../components/cssPages/GaleriaEvento.module.css'

const GaleriaSlider = () => {
    return(
        <>

    <Carousel className={styles.slide} >
        <Carousel.Item interval={1000}>

            <img
                className="First Photo"
                src={Carva1}
                alt="First slide"/>

        </Carousel.Item>
        <Carousel.Item interval={700}>

            <img
                className="Second Photo"
                src={Carva2}
                alt="Second slide"/>

        </Carousel.Item>
        <Carousel.Item interval={500}>

            <img
                className="Third Photo"
                src={Carva1}
                alt="Third slide"/>

        </Carousel.Item>
        <Carousel.Item>

            <img
                className="Fourth Photo"
                src={Carva2}
                alt="Fourth slide"/>

        </Carousel.Item>
        </Carousel>
        

        </>
    );
}

export default GaleriaSlider
