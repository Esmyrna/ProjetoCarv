import Carousel from 'react-bootstrap/Carousel';
import Carva1 from '../../imagens/Carva1.jpg'
import Carva2 from '../../imagens/Carva2.jpg'
import styles from '../cssPages/Eventos.module.css'


function IndividualIntervalsExample() {
    return (
     <Carousel >
        <Carousel.Item interval={1000}>

            <img
                className={styles.photo}
                src={Carva1}
                alt="First slide"/>

        </Carousel.Item>
        <Carousel.Item interval={700}>

            <img
                className={styles.photo}
                src={Carva2}
                alt="Second slide"/>

        </Carousel.Item>
        <Carousel.Item interval={500}>

            <img
                className={styles.photo}
                src={Carva1}
                alt="Third slide"/>

        </Carousel.Item>
        <Carousel.Item>

            <img
                className={styles.photo}
                src={Carva2}
                alt="Fourth slide"/>

        </Carousel.Item>
        </Carousel>
        

    );
  }
  
  export default IndividualIntervalsExample;