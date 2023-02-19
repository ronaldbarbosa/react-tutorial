import { Link } from "react-router-dom"
import styles from "./Footer.module.css"

import { FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa'

export default function Footer() {
    return (
        <footer>
            <p>Ronald Veríssimo Barbosa</p>
            <FaGithub className={ styles.icon }/>
            <Link to="https://github.com/ronaldbarbosa" className={ styles.link } target="_blank">GitHub</Link>
            <FaLinkedin className={ styles.icon }/>
            <Link to="https://www.linkedin.com/in/ronald-barbosa/" className={ styles.link } target="_blank">Linkedin</Link>
            <FaInstagram className={ styles.icon }/>
            <Link to="https://instagram.com/ronald_barbosa204" className={ styles.link } target="_blank">Instagram</Link>
        </footer>
    )
}