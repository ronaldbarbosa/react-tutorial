function Form() {
    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log("Usuário cadastrado")
    }

    return (
        <>
            <h2>Cadastro:</h2>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Digite seu nome" />
                </div>
                <div>
                    <input type="submit" value="Enviar" />
                </div>
            </form>
        </>
    )
}

export default Form