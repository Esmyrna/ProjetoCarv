
import ImagemLateral from '../../../imagens/carva.png'
import vector1 from '../../../imagens/Vector1.png'
import vector2 from '../../../imagens/Vector2.png'
import vector3 from '../../../imagens/Vector3.png'
import vector4 from '../../../imagens/Vector4.png'
import styles from './SobreCarv.module.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom'

function SobreCarv() {

  // Container Sobre //

  return (
    <>
    
      <section className={styles.containerSobre}>


        <div className={styles.txtAbout}>

          <h1>CRIANDO <span id={styles.pink}>MEMÓRIAS...</span></h1>
          <p>Seja nas prévias ou no meio da folia;
            com o pé na areia ou de gravata borboleta; aqui mesmo na Carvalheira ou
            no paraíso de Fernando de Noronha. Cada mínimo detalhe é pensado pra que
            você saia dos nossos encontros com horas de diversão tatuadas nas memórias
            e no coração. Porque no fim das contas, nosso negócio não é fazer festas.
            Nosso trabalho mesmo é fabricar boas lembranças. Vem, se joga, curta ao máximo
            e sinta como é a experiência Carvalheira!
          </p>

          <Link to='/sobre'>
            <button id={styles.btnTxt}> SAIBA MAIS   </button>
          </Link>

          {/* <div className={styles.bannerMobileSobre}>
            <img src={ImagemLateral} alt="imagem" height="550px" width="400px" />
          </div> */}

        </div>


        <div className={styles.imgAbout}>
          
            <img src={ImagemLateral} alt="imagem" height="550px" width="400px" />
            <img className={styles.v4} src={vector4} alt="" />
            <img className={styles.v3} src={vector3} alt="" />
            <img className={styles.v2} src={vector2} alt="" />
            <img className={styles.v1} src={vector1} alt="" />
         
        </div>

      </section>
    </>
  )
}

export default SobreCarv;