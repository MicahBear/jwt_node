import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Login from './features/auth/Login'
import Welcome from './features/auth/Welcome'
import TasksList from './features/tasks/TasksList'
import UsersList from './features/users/UsersList'
import EmpDashPage from './pages/EmpDashPage'
import Public from './pages/Public'
import Register from './pages/Register'

function App() {


  return (
    <>
    <Router>
    <div className='container'>
      <Header/>
      <Routes>
        <Route path='/' element={<Layout/>}> 
         <Route index element={<Public/>}/> 
         <Route path='login' element={<Login/>}/>
         <Route path='dash' element={<EmpDashPage/>}>
          <Route index element={<Welcome/>} />
          
          <Route path ='tasks'>
            <Route index element = {<TasksList />} />
          </Route>

          <Route path ='users'>
            <Route index element = {<UsersList />} />
          </Route>

         </Route> {/*end of dashboard routes*/}
         
         <Route path='/Register' element={<Register/>}/>
        </Route>
      </Routes>
    </div>
    </Router>
    </>
  )
}

export default App
