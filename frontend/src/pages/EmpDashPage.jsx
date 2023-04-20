import { Outlet } from 'react-router-dom'

const EmployeeDash =()=>{
  return (
  <>
   <div className="dash-container">
    <Outlet />
   </div>
  </>
    )
}

export default EmployeeDash