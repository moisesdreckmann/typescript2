import './App.css'
import Card from './pages/Card'
import Site from './pages/Sitee'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navibar';


function App() {

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" index={true} element={<Card id = {1} mensagem='Olá. Este é o contador: '/>} />
        <Route path="/login" element={<Site />} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
