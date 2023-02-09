import styles from './Frase.module.css'

function Frase(props) {
    return (
        <div className={styles.frase_container}>
            <p className={styles.frase_content}>Componente frase - {props.nome}</p>
        </div>
    )
}

export default Frase