import { useLocation, useNavigate } from "react-router-dom"

const EmpDashFooter = () => {
 const navigate = useNavigate()
 const {pathname} = useLocation()

 const onGoHomeClicked = ()=> navigate('/dash')

 let homeButton = null
 if( pathname !== '/dash'){
    homeButton = (
        <button
         className="dash__footer"
         title="Home"
         onClick={onGoHomeClicked}
        >
        employee dash
        </button>
    )
 }



  return (
 <footer className='dash-footer'>
 <p>Current User:</p>
 <p>Status:</p>
    {homeButton}
 </footer>
    )
}

export default EmpDashFooter