import { Link } from 'react-router-dom'
function Welcome() {
    const date = new Date()
    //formating date
    const today = new Intl.DateTimeFormat('en-US', {dateStyle: 'full', timeStyle:'long'}).format(date)
    const content = (
        <section className="welcome">
            <p>{today}</p>
            <h1>Welcome</h1>
            <p><Link to='/dash/tasks'>View tasks</Link></p>

            {/* some user will not have access */}
            <p><Link to='/dash/users'>View User Settings</Link></p>
        </section>
    )
  return content
}

export default Welcome