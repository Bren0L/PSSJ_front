import React, { useState } from 'react'

export default function CreateTransaction() {

    const [cardNumber, setCardNumber] = useState('')
    const [value, setValue] = useState('')
    const [operation, setOperation] = useState('')

    const sendData = async() => {
        await fetch('http://localhost:8080/transfer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application'
            },
            body: JSON.stringify({
                cardNumber,
                value,
                operation
            })
        }).then(async e => console.log(await e.json()))
        
    }

  return (
    <div>
        <form onSubmit={(e) => e.preventDefault()}>
            <label id='cardNumber'>NÚMERO DO CARTÃO DA CONTA DESTINO</label><br/>
            <input type='text' name='cardNumber' id='cardNumber' value={cardNumber} onChange={(e) => setCardNumber(e.target.value)}/><br/>
            <label>INSIRA O VALOR</label><br/>
            <input type='number' name='value' id='value' value={value} onChange={(e) => setValue(e.target.value)}/><br/>
            <label id='type'>INSIRA O TIPO DE TRANSAÇÃO</label><br/>
            <input type='radio' name='transfer_option' id='transfer' value='tranferir' onClick={() => setOperation('transfer')}/>
            <label>Transferência</label><br/>
            <input type='radio' name='transfer_option' id='deposit' value='depositar' onClick={() => setOperation('deposit')}/>
            <label>Depósito</label><br/>
            <input type='radio' name='transfer_option' id='widthraw' value='sacar' onClick={() => setOperation('widthdraw')}/>
            <label>Saque</label><br/>
            <input type='submit' value='EFETUAR OPERAÇÃO' onClick={() => sendData()}/>
        </form>
    </div>
  )
}
