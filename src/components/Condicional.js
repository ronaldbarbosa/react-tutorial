import { useState } from "react";

export default function Condicional() {
    const [email, setEmail] = useState('')
    const [userEmail, setUserEmail] = useState('')

    function enviarEmail(e) {
        e.preventDefault()
        setUserEmail(email)
        console.log(userEmail)
    }

    function limparFormulario() {
        setUserEmail('')
    }
    
    return (
        <div>
            <h2>Cadastre o seu e-mail:</h2>
            <form>
                <input type="email" placeholder="Digite seu e-mail..." onChange={(e) => setEmail(e.target.value)} />
                <button type="submit" onClick={enviarEmail}>Enviar</button>
            </form>
            {userEmail && ( // se userEmail existe, execute ()
                <div>
                    <p>O e-mail do usuário é { userEmail }</p>
                    <button onClick={ limparFormulario }>Limpar</button>
                </div>
            )}
        </div>
    )
}