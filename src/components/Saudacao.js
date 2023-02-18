export default function Saudacao({ nome }) {
    function gerarSaudacao(algumNome) {
        return `Olá ${algumNome}!`
    }

    return (
        <>
            { nome && <p>{ gerarSaudacao(nome) }</p>}
        </>
    )
}