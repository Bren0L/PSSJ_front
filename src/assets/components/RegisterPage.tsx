import './styles/RegisterPage.css'
import { useState } from 'react'

export default function RegisterPage() {

    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [bornDate, setBornDate] = useState('');
    const [password, setPassword] = useState('');

    const sendData = async() => {

        const data = {
            name,
            cpf,
            bornDate,
            password
        }


        await fetch('http://localhost:8080/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((e) => console.log(e.json())).catch((e) => console.error(e.json()))
    }

  return (
    <div id='register'>
        <h1>INSIRA SEUS DADOS</h1>
        <form onSubmit={(e) => e.preventDefault()}>
            <label id='name'>Nome</label><br/>
            <input type='text' name='name' id='name' value={name} onChange={(e) => setName(e.target.value)}/><br/>
            <label id='cpf'>CPF</label><br/>
            <input type='text' name='cpf' id='cpf' value={cpf} onChange={(e) => setCpf(e.target.value)}/><br/>
            <label id='bornDate'>Data de nascimento</label><br/>
            <input type='date' name='bornDate' id='bornDate' value={bornDate} onChange={(e) => setBornDate(e.target.value)}/><br/>
            <label id='password'>Senha</label><br/>
            <input type='password' name='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)}/><br/>
            <input type='submit' value='enviar' onClick={() => sendData()}/>
        </form>

    </div>
  )
}
