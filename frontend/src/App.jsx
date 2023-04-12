import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {


  return (
    <>
    <Router>
    <div className='container'>
      <Routes>
        <Route path='/login' element={Login}/>
        <Route path='/Register' element={Register}/>
      </Routes>
    </div>
    </Router>
    </>
  )
}

export default App
