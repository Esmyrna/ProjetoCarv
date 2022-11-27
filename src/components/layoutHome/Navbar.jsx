import { Link } from 'react-router-dom'

import Container from './Container'

import styles from './Navbar.module.css'

import logo from '../../MidiasCarv/logo/logo.png'

function Navbar() {
    return (
        <header>
        <nav className={styles.navbar}>
                <Link to="/">
                    <img id={styles.img}src={logo} alt="Carvalheira" />
                </Link>
                <div className={styles.list}>
                <ul>
                    <li className={styles.item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/eventos">Eventos</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/sobre">Sobre</Link>
                    </li>
                    <li className={styles.item} >
                        <Link to="/contato">Contato</Link>
                    </li>
                </ul>
                </div>
                <Link to="/">
                    <button className={styles.btn}>
                        INGRESSOS
                    </button>
                </Link>
         
        </nav>
        </header>
    )
}
export default Navbar;