import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faPhone } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  return (
    <>
      <div className='flex flex-col md:flex-row justify-between items-center p-4 bg-gray-800'>
        <img className='w-12 h-12 mb-4 md:mb-0' src="./images/logo.png" alt="Logo" />
        <nav className='flex justify-center'>
          <ul className='list-none flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-9'>
            <li className='list-none flex items-center justify-center p-4 text-lg md:text-2xl text-white rounded transition duration-300 ease-in-out transform hover:scale-110'>
              <FontAwesomeIcon icon={faHome} className='mr-2' />
              <a href="#">Home</a>
            </li>
            <li className='list-none flex items-center justify-center p-4 text-lg md:text-2xl text-white rounded transition duration-300 ease-in-out transform hover:scale-110'>
              <FontAwesomeIcon icon={faInfoCircle} className='mr-2' />
              <a href="#">About</a>
            </li>
            <li className='list-none flex items-center justify-center p-4 text-lg md:text-2xl text-white rounded transition duration-300 ease-in-out transform hover:scale-110'>
              <FontAwesomeIcon icon={faPhone} className='mr-2' />
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <button className='mt-4 md:mt-0 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-110'>
          Log In
        </button>
      </div>
    </>
  )
}

export default Nav