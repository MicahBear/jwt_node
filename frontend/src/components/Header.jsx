import { Link } from 'react-router-dom'; // want links to our pages

function Header() {
  return (
    <header className='header'>
        <div className="logo">
            <Link to='/'>Ticket System</Link>
        </div>
        {/* <ul>
            <li>
                <Link to='/login'>
                    <FaSignInAlt/> Login
                </Link>
            </li>
            <li>
                <Link to='/register'>
                    <FaUser/> Register
                </Link>
            </li>
        </ul> */}
    </header>
  )
}

export default Header