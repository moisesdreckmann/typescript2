import './App.css'
import Card from './components/Card'

function App() {

  function handlerClick() {
    alert("Bem vindo(a)")
  }

  return (
    <>
      <Card id = {1} mensagem='Olá' onClick= {handlerClick}/>
    </>
  )
}

export default App
