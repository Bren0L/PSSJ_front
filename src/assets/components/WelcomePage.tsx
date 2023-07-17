import { useNavigate } from 'react-router-dom'
import './styles/WelcomePage.css'

export default function WelcomePage() {

    const navigate = useNavigate();

  return (
    <div id='main'>
      <h1>SEJA BEM VINDO(A) AO BANCO BBB</h1>
      <button onClick={() => navigate('/user/login')}>COMEÇAR</button>
    </div>
  )
}
