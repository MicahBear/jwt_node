import { Outlet } from "react-router-dom"
import EmpDashFooter from "../components/EmpDashFooter"
import EmpDashHeader from '../components/EmpDashHeader'



const EmpLayout = () => {
  return (
  <>
  <EmpDashHeader/>
   <div className="dash-container">
    <Outlet />
   </div>
   <EmpDashFooter />
  </>
    )
}

export default EmpLayout

