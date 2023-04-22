import { Route, Routes } from 'react-router-dom'
import Layout from './layouts/Layout'
// import EmpLayout from './components/EmpLayout'
import Login from './features/auth/Login'
import Welcome from './features/auth/Welcome'
import NotesPage from './features/notes/NotesPage'
import TasksPage from './features/tasks/TasksPage'
import UsersList from './features/users/UsersList'
// import EmpDashPage from './pages/EmpDashPage'
import EmpLayout from './layouts/EmpLayout'
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
        </Route>
         {/** protected routes - authentication */}

        <Route path='/dash' element={<EmpLayout/>}>
            <Route index element={<Welcome/>} />
            <Route path ='tasks'>
            <Route index element = {<TasksPage />} />
            </Route>
            <Route path= 'notes' element={<NotesPage/>}/>

          {/** require authorizaiton */}
          <Route path ='users'>
            <Route index element = {<UsersList />} />
          </Route>

        </Route> {/*end of dashboard routes*/}
         
         <Route path='/Register' element={<Register/>}/>
        
      </Routes>
    </div>
    </>
  )
}

export default App
