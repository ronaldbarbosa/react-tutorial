import PropTypes from 'prop-types'

function ItemLista({ filme, genero, ano_lancamento }) {
    return(
        <>
            <li>{filme} - {genero} Ano: {ano_lancamento}</li>
        </>
    )
}

ItemLista.propTypes = {
    filme: PropTypes.string.isRequired,
    genero: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number.isRequired
}

ItemLista.defaultProps = {
    filme: 'Sem título',
    genero: 'Não especificado',
    ano_lancamento: 0
}

export default ItemLista