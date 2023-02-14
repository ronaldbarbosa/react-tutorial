import { useState } from "react"

function Form() {
    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log(`${name} - ${password}`)
    }

    const [name, setName] = useState('Ronald') // useState com valor default
    const [password, setPassword] = useState()

    return (
        <>
            <h2>Cadastro:</h2>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input type="text" id="name" name="name" placeholder="Digite seu nome" 
                        value={name} // passando o valor default do useState no HTML 
                        onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Senha: </label>
                    <input type="password" id="password" name="password" placeholder="Digite sua senha"
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <input type="submit" value="Enviar" />
                </div>
            </form>
        </>
    )
}

export default Form