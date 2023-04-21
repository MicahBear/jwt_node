import { Outlet } from 'react-router-dom'
import EmpDashHeader from '../components/EmpDashHeader'

const EmployeeDash =()=>{
  return (
  <>
  <EmpDashHeader/>
   <div className="dash-container">
    <Outlet />
   </div>
  </>
    )
}

export default EmployeeDash