import './styles/LoginPage.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'



export default function LoginPage(){
    const navigate = useNavigate()
    const [cardNumber, setCardNumber] = useState('')
    const [password, setPassword] = useState('')

    const getData = async() => {
        await fetch('http://localhost:8080/user/login?' + new URLSearchParams({
            cardNumber,
            password
        }).toString())
        .then(async res => {
            navigate('/user/transaction', {state: {User: await res.json()}})
        })
        .catch(err => {
            console.error(err)
            return
        })
        
    }

    return (
        <div>
            <h1>SEJA BEM VINDO(A) AO BBB</h1>
            <form onSubmit={(e) => e.preventDefault()}>
                <label id='cardNumber'>Número do cartão</label><br/>
                <input type='text' name='cardNumber' id='cardNumber' value={cardNumber} onChange={(e) => setCardNumber(e.target.value)}/><br/>
                <label id='password'>Password</label><br/>
                <input type='password' name='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)}/><br/>
                <input type='submit' value={'LOGIN'} onClick={() => getData()}/>
            </form>
        </div>
    );
}