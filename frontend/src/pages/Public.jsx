import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section>
            <header>
                <h1>Welcome to <span className='nowrap'>Tech Requests</span></h1>
            </header>
            <main className='public--main'>
                <p>Located in Beautiful Oregon. Tech requests opportunity to sumbit your technical questions where Senior Engineers answer them.</p>
                <p className='public--email'>info@techquest.com</p>
            </main>
            <footer>
                <Link to='/login'>Employee Login</Link>
            </footer>
        </section>
    )
    return content
}
export default Public