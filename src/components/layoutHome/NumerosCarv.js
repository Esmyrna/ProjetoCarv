import styles from './Numeros.module.css'
import { useEffect } from 'react'


function NumerosCarv(){


   let count1 = document.getElementById('count1');
   let count2 = document.getElementById('count2');
   let count3 = document.getElementById('count3');
   let c1 = 0 , c2 = 0 , c3 = 0;
   let time = 5;

   let time1 = setInterval(() => {
      
      count1 = `${c1 + 1}`

      if(c1 === 100) {
         clearInterval(time1);
      }


   }, `${time}`)

   let time2 = setInterval(() => {
      
      count2 = `${c2 + 1}`

      if(c2 === 400) {
         clearInterval(time1);
      }


   },  `${time}`)

   let time3 = setInterval(() => {
      
      count3 = `${c3 + 1}`

      if(c3 === 200) {
         clearInterval(time1);
      }


   }, `${time}`)

   

    return(
        <section className={styles.containerNumero}>
            <div className={styles.sobre}>
               <h1 id={styles.white}>SOBRE<span id={styles.pink}>NÓS</span></h1>
            </div>
 
                  <div className={styles.numbers}>
                     <div clasasName={styles.num1}>
                        <p className={styles.frase1}> <span className={styles.purple} id="count1">{time1} </span> <br></br>Eventos desde 2004</p>
                     </div>
                     <div className={styles.frase2}>
                     <p className={styles.frase2}> <span className={styles.purple} id="count2">{time2}K </span> <br></br>De pessoas na plateia</p>
                     </div>
                     <div className={styles.frase3}>
                     <p className={styles.frase3}> <span className={styles.purple} id="count3">200 </span> <br></br>Marcas envolvidas</p>
                     
                        
                     </div>
                  </div>

               </section>
 
     
 
    )
}


export default NumerosCarv;