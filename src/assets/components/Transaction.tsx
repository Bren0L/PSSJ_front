import { useEffect, useState } from 'react'
import './styles/Transaction.css'
import { useLocation } from 'react-router-dom'



export default function Transaction() {

    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')
    const [operador, setOperator] = useState('')
    const [transactions, setTransactions] = useState([])
    const { state } = useLocation()
    const { User } = state

    
    console.log(User);
    

    useEffect(() => {
        (
            getTableProps()
        ),[]
    })

    const getTableProps = async() => {
        await fetch('http://localhost:8080/user/transactons', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                from,
                to,
                operador
            })
        }).then(async(res) => {
            setTransactions(await res.json())
        }).catch(err => console.error(err.message.json())
        )

    }

  return (
    <div>
        <form onSubmit={(e) => e.preventDefault()}>
            <label id='from'>DE</label><br/>
            <input type='date' name='from' id='from' value={from} onChange={(e) => setFrom(e.target.value)}/><br/>
            <label id='to'>ATÉ</label><br/>
            <input type='date' name='to' id='to' value={to} onChange={(e) => setTo(e.target.value)}/><br/>
            <label>Nome do operador</label><br/>
            <input type='text' name='operator' id='operator' value={operador} onChange={(e) => setOperator(e.target.value)}/><br/>
            <input type='submit' value={'procurar'}/>
        </form>
        <table>
            <tr>
                <th>DATA</th>
                <th>VALOR</th>
                <th>TIPO</th>
                <th>NOME DO OPERADOR</th>
            </tr>
            {transactions && transactions.map(ts => {
                return(
                    <tr>
                        <td>ts.date</td>
                        <td>ts.value</td>
                        <td>ts.type</td>
                        <td>ts.operatorName</td>
                    </tr>
                )}
            )}
        </table>
    </div>
  )
}
