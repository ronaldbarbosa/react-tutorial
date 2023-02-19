import { Link } from "react-router-dom"
import styles from "./Navbar.module.css"

export default function Navbar() {
    return (
        <nav className={ styles.nav }>
            <Link className={ styles.nav_link } to="/">Início</Link>
            <Link className={ styles.nav_link } to="/sobre">Sobre</Link>
            <Link className={ styles.nav_link } to="/contato">Contato</Link>
      </nav>
    )
}