import React from 'react'
import 'boxicons'
import { Link, animateScroll as scroll } from 'react-scroll';
function Navbar() {
  return (
    <div className='sm:top-0 sm:justify-between sm:h-fit sm:px-24 fixed bottom-0 w-screen flex justify-center shadow bg-white py-3 z-10'>
      <div className=' hidden sm:flex'>GAURAV</div>
      <ul className='flex items-center justify-between sm:space-x-8 space-x-6' >
        <li className="nav-item">
          <Link
            className="cursor-pointer hover:text-blue-500"
            to="home"
            spy={true}
            smooth={true}
            offset={-50}
            duration={100}
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="cursor-pointer hover:text-blue-500"
            to="about"
            spy={true}
            smooth={true}
            offset={-30}
            duration={100}
          >
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="cursor-pointer hover:text-blue-500"
            to="skills"
            spy={true}
            smooth={true}
            offset={-100}
            duration={100}
          >
            Skills
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="cursor-pointer hover:text-blue-500"
            to="projects"
            spy={true}
            smooth={true}
            offset={-100}
            duration={100}
          >
            Projects
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="cursor-pointer hover:text-blue-500 "
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={100}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>

  )
}

export default Navbar