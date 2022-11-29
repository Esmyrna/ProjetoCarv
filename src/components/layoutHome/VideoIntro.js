import styles from '../../components/layoutHome/Video.module.css'
import videoCarvalheira from '../../MidiasCarv/media/carvideo.mp4'
import { BsInstagram } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { BsSpotify } from 'react-icons/bs'
import { BsYoutube } from 'react-icons/bs'
import { useState } from 'react';
import { Link } from 'react-router-dom'

function VideoIntro() {
    const  [link, setLink] = useState('')
    



    function IconInstaLink(){
        setLink('https://www.instagram.com/carvalheira/?hl=pt')
    }
  
   
        

    
 
    return(

      <div className={styles.containerVideo}>
        <video autoPlay muted loop id={styles.videoCarvalheira} className={styles.videoBody}>
           <source src={videoCarvalheira} type="video/mp4" />
        </video>
         <div id={styles.wrapperVideo}>
           <div id={styles.containerIconsVideo}>
              <div class={styles.instagramIcon} id={styles.iconV}  onClick={link}>
                <BsInstagram  onClick={link} />
              </div>
              <div class={styles.facebookIcon} id={styles.iconV} >
                 <BsFacebook />
              </div>
              <div class={styles.spotifyIcon} id={styles.iconV}>
                 <BsSpotify />
              </div>
              <div class={styles.youtubeIcon} id={styles.iconV}>
                 <BsYoutube />
              </div>
           </div>

           <div id={styles.containerGeralVideo}>
              <div id={styles.headerBox}>
                 <h1>CREATING MEMORIES</h1>
                 <p>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nihil porro impedit molestiae commodi at autem unde corporis.
              </p>
              </div>
            
              <Link to="/ingresso">
              <button id={styles.ingressoBtnVideo} >INGRESSOS</button>
              </Link>
             
           </div>
        </div>
        
        
     </div>
    )
}

export default VideoIntro;