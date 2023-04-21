import { Link } from 'react-router-dom'

const EmpDashHeader = () => {
  return (
    <header className='dash-header'>
        <div className="dash-header__container">
            <Link to ='/dash/tasks'>
              <h1 className="dash-header__title">Employee Tasks</h1>
            </Link>
        </div>
        <nav className="dash-header__nav">
          {/**add nav buttons later */}
        </nav>
    </header>
  )
}

export default EmpDashHeader