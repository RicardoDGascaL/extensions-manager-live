import React from 'react'
import logo from '../assets/images/logo.svg'
import IconSun from '../assets/images/icon-sun.svg'
import IconMoon from '../assets/images/icon-moon.svg'


export const Header = () => {
  return (
    <div className='border-2 border-black bg-Neutral-0'>
        <img src={logo} alt="logo" />
        <button>
            <img src={IconMoon} alt="Icon button" />
        </button>
    </div>
  )
}
