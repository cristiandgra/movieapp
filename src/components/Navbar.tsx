import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()

  const navItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Mi Lista', path: '/mylist' }
  ]

  return (
    <nav className='flex items-center justify-center bg-blue-500 p-6'>
      <ul className='flex items-center justify-between space-x-4'>
        {navItems.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              className={`text-white text-lg font-semibold hover:text-yellow-300 ${
                location.pathname === item.path ? 'underline' : ''
              }`}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
