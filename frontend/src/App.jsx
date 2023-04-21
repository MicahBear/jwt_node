import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
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
    <div className='container'>
      <Routes>
        <Route path='/' element={<Layout/>}> 
         {/** public routes */}
         <Route index element={<Public/>}/> 
         <Route path='login' element={<Login/>}/>
         {/** protected routes - authentication */}
         <Route path='dash' element={<EmpDashPage/>}>
          <Route index element={<Welcome/>} />
          <Route path ='tasks'>
            <Route index element = {<TasksList />} />
          </Route>

          {/** require authorizaiton */}
          <Route path ='users'>
            <Route index element = {<UsersList />} />
          </Route>

         </Route> {/*end of dashboard routes*/}
         
         <Route path='/Register' element={<Register/>}/>
        </Route>
      </Routes>
    </div>
    </>
  )
}

export default App
