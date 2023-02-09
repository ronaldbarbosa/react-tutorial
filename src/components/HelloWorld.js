import Frase from "./Frase"

function HelloWorld() {
    const nome = "Amelia"

    return (
        <div>
            <h1>Primeiro componente</h1>
            <Frase nome="Maria"></Frase>
            <Frase nome={nome}></Frase>
        </div>
    )
}

export default HelloWorld