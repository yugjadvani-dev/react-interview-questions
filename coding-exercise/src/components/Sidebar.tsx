import { Link } from 'react-router';

const Sidebar = () => {
  return (
    <aside className='flex items-start flex-col w-full max-w-3xs'>
        <Link to="/first-question">First Question (Search Input)</Link>
        <Link to="/second-question">Second Question (Debounce)</Link>
    </aside>
  )
}

export default Sidebar