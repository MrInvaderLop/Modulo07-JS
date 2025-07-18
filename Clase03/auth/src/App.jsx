import './App.css'
import { AuthProvider } from './context/AuthContext'
import UserInfo from './components/Userinfo'
import AuthButton from './components/AuthButton'

function App() {

  return (
    <>
      <AuthProvider>
        <main>
          <h1>App con Login</h1>

          <UserInfo></UserInfo>
          <AuthButton></AuthButton>
        </main>
      </AuthProvider>
    </>
  )
}

export default App
