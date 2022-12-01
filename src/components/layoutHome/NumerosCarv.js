import styles from './Numeros.module.css'
import { useEffect, useState, boxRef, useRef } from 'react'
import { useSpring, animated } from 'react-spring'

function NumerosCarv() {


   function Number({ n }) {

  
   
      const { number } = useSpring({
         from: { number: 0 },
         number: n,
         delay: 200,
         config: { mass: 1, tension: 20, friction: 10 },
      });
      return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
   }


 


   return (
      <section className={styles.containerNumero}>
         <div className={styles.sobre}>
            <h1 id={styles.white}>SOBRE<span id={styles.pink}> NÓS</span></h1>
         </div>

         <div className={styles.numbers}>
            <div clasasName={styles.num1}>
               <p className={styles.frase1}> <span className={styles.purple} > <Number n={100} className={styles.contador} />  </span> Eventos desde 2004</p>
            </div>
            <div className={styles.frase2}>
               <p className={styles.frase2}> <span className={styles.purple} ><Number n={400} className={styles.contador} />k</span> De pessoas na plateia</p>
            </div>
            <div className={styles.frase3}>
               <p className={styles.frase3}> <span className={styles.purple} ><Number n={200} className={styles.contador} /> </span> Marcas envolvidas</p>


            </div>
         </div>

      </section>



   )
}


export default NumerosCarv;