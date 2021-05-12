import React from 'react'
import NavList from './NavList';
import NavLogo from './NavLogo';

const Navbar = () => {
    return (
        <div className='flex flex-row px-4 fixed w-full top-0 font-aeonik text-white  z-10'>
            <NavLogo/>
            <NavList/>
        </div>
    )
}

export default Navbar;