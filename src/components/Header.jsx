import React from 'react'
import {FaCarAlt} from 'react-icons/fa'

import './style.css'

const Header = () => {
  return (
    <div className='header'>
        <span className='logo'>
        <FaCarAlt size={30}/>
        Automotive
        </span>

        <span className='nav-links'>
            <span className='nav-link'>Home</span>
            <span className='nav-link'>Features</span>
            <span className='nav-link'>Price</span>
            <span className='nav-link'>Contact</span>
            <button className='button nav-link '>Book Appoinment</button>
        </span>
       

    </div>
  )
}

export default Header