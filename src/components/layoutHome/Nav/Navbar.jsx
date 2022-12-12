import { Link } from 'react-router-dom'
import Container from '../Container'
import styles from './Navbar.module.css'
import logo from '../../../MidiasCarv/logo/logo.png'

import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbar() {

    // Cabeçalho do Site //
    return (
        <header>
            <nav className={styles.navbar}>
                <Link to="/">
                    <img id={styles.img} src={logo} alt="Carvalheira" />
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
                        <div className={styles.dropdown}>
                            <NavDropdown title="Menu" id={styles.navDropdown}>
                             
                                
                            <NavDropdown.Item  id={styles.itemDrop}   > <Link id={styles.links} to="/">Home</Link> </NavDropdown.Item>
                               <NavDropdown.Item  id={styles.itemDrop}   > <Link   id={styles.links} to="/eventos">Eventos</Link></NavDropdown.Item>
                               <NavDropdown.Item  id={styles.itemDrop}   > <Link  id={styles.links} to="/sobre">Sobre</Link></NavDropdown.Item>
                               <NavDropdown.Item  id={styles.itemDrop}   > <Link   id={styles.links} to="/contato">Contato</Link></NavDropdown.Item>
                                 
                                
                            </NavDropdown>
                        </div>
                    
                </div>

                <button className={styles.btn}>

                    <Link to="/ingresso">INGRESSOS</Link>



                </button>
            </nav>
        </header>
    )
}
export default Navbar;