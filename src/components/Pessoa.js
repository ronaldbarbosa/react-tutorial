function Pessoa({nome, idade, profissao, foto}) {
    return (
        <div>
            <img src={foto} alt={nome}></img>
            <h2>Nome: {nome}</h2>
            <h2>Idade: {idade}</h2>
            <h2>Profissão: {profissao}</h2>
        </div>
    )
}

export default Pessoa