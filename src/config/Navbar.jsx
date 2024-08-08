import React from 'react'
import { Link } from 'react-router-dom'
import About from '../component/about/About'
import Home from '../home/Home'
import Contact from '../component/contact/Contact'
// import { Home } from '@mui/icons-material'

const Navbar = () => {
  return (
    <>
    
    <div>
    <ul className='flex items-center justify-around'>

        <li>
            <Link to={Home}  >Home  </Link>
        </li>
        <li>
            <Link to={About}  >About </Link>
        </li>
        <li>
            <Link to={Contact}  >Contact  </Link>
        </li>
    </ul>

    </div>
    
    </>
  )
}

export default Navbar