import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Header from './components/Header'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {


  return (
    <>
    <Router>
    <div className='container'>
      <Header/>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
      </Routes>
    </div>
    </Router>
    </>
  )
}

export default App
