import ItemLista from "./ItemLista"

function Lista() {
    return (
        <>
            <h1>Minha lista</h1>
            <ul>
                <ItemLista filme="LOTR" genero="Fantasia" ano_lancamento={2001}/>
                <ItemLista filme="HP" genero="Fantasia" ano_lancamento={2001}/>
                <ItemLista filme="Rocky" genero="Drama" ano_lancamento={1976}/>
                <ItemLista />
            </ul>
        </>
    )
}

export default Lista