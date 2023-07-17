import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./assets/components/LoginPage";
import WelcomePage from "./assets/components/WelcomePage";
import './assets/index.css'
import RegisterPage from "./assets/components/RegisterPage";
import Transaction from "./assets/components/Transaction";
import CreateTransaction from "./assets/components/CreateTransaction";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/user" element={<WelcomePage/>}/>
        <Route path="/user/login" element={<LoginPage/>}/>
        <Route path="/user/register" element={<RegisterPage/>}/>
        <Route path="/user/transaction" element={<Transaction/>}/>
        <Route path="/user/createTransaction" element={<CreateTransaction/>}/>
      </Routes>
    </Router>
  )
}

export default App
