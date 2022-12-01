import styles from './MelhoresM.module.css'
import MM from '../../../imagens/MelhoresMomentos.jpeg'
function MelhoresMomentos() {


   return (

       // Seção Melhores Momentos //
       
      <section className={styles.containerMoments}>

         <div className={styles.btnMoments}>

         </div>
         <h1 id={styles.bestMoments}>MELHORES <span id={styles.pink}>MOMENTOS</span> </h1>
         <hr id={styles.line}></hr>

         <div className={styles.galeryWrapper}>

            <div className={styles.moment}>

               <img id="moments1" src={MM} alt="Melhores momentos" />

               <img id="moments2" src={MM} alt="Melhores momentos" />

               <img id="moments3" src={MM} alt="Melhores momentos" />
            </div>

         </div>
         <div className={styles.years}>
            <div id={styles.year1}><span id={styles.purple}>20</span>19</div >
            <div id={styles.year2}><span id={styles.purple}>20</span>20</div >
            <div id={styles.year3}><span id={styles.purple}>20</span>21</div >
         </div>


      </section>
   )
}

export default MelhoresMomentos;