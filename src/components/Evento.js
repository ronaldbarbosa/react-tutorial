import Button from "./Button"

function Evento({ numero }) {
    function meuEvento() {
        console.log(`OnClick ativou evento ${numero}`)
    }

    function outroEvento() {
        console.log("Segundo evento ativado")
    }

    function maisUmEvento() {
        console.log("Terceiro evento ativado")
    }
    
    return (
        <>
            <p>Clique para disparar um evento:</p>
            <button onClick={meuEvento}>Ativar</button>
            <br />
            <Button event={outroEvento} text="Segundo evento" />
            <br />
            <Button event={maisUmEvento} text="Terceiro evento" />
        </>
    )
}

export default Evento