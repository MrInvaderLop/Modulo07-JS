import './App.css'
import CounterButton from './components/CounterButton'
import CounterDisplay from './components/CounterDisplay'
import CounterProvider from './context/CounterProvider'

function App() {

  return (
    <>
    <CounterProvider>
      <main>
        <h1>Creación de sitios web con Contexto</h1>
        <CounterDisplay></CounterDisplay>
        <CounterButton></CounterButton>
      </main>
    </CounterProvider>
    </>
  )
}

export default App
