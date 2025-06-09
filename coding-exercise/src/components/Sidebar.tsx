import { Link } from 'react-router';

const Sidebar = () => {
  return (
    <aside className='w-full max-w-3xs'>
        <Link to="/first-question">First Question (Search Input)</Link>
    </aside>
  )
}

export default Sidebar