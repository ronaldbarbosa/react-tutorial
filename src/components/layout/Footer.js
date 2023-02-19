import { Link } from "react-router-dom"
import styles from "./Footer.module.css"

export default function Footer() {
    return (
        <footer>
            <p>Ronald Barbosa</p>
            <Link to="https://github.com/ronaldbarbosa" className={ styles.link } target="_blank">GitHub</Link>
        </footer>
    )
}