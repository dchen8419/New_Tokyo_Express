import React from 'react'
import './Header.css'
import { HiPhone } from 'react-icons/hi'
import { ImLocation } from 'react-icons/im'



function Header() {
    return (
        <div id="Home" className='header-container'>
            <div className='header-location'> 
                <span className='icon'><a href="https://goo.gl/maps/w93i9X4fbxRhRZW89"><ImLocation /></a></span>
                <span className='text'><a href="https://goo.gl/maps/w93i9X4fbxRhRZW89"> Florence, SC</a></span>
            </div>
            <div className='header-phone'> 
                <span className='icon'><a href="tel:843-841-3188"><HiPhone /></a></span>
                <span className='text'><a href="tel:843-841-3188"> (843) 678-9595</a></span>
            </div>
        </div>
    )
}

export default Header