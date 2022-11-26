import styles from './Numeros.module.css'

function NumerosCarv(){
    return(
        <section className={styles.containerNumero}>
                  <div className={styles.sobre}>
                     <h1 id={styles.white}>SOBRE <span id={styles.pink}>NÓS</span></h1>
                  </div>

                  <div className={styles.numbers}>
                     <div clasasName={styles.num1}>
                        <p className={styles.frase1}> <h1 id={styles.purple}>100 </h1> <br></br>Eventos desde 2004</p>
                     </div>
                     <div className={styles.frase2}>
                     <p className={styles.frase2}> <h1 id={styles.purple}>400K </h1> <br></br>De pessoas na plateia</p>
                     </div>
                     <div className={styles.frase3}>
                     <p className={styles.frase3}> <h1 id={styles.purple}>200 </h1> <br></br>Marcas envolvidas</p>
                     
                        
                     </div>
                  </div>

               </section>
    )
}


export default NumerosCarv;