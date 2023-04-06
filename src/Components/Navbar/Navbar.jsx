import { useRef } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import '../Navbar/Navbar.css'
import chef from '../../Assets/chef.png'

function Navbar() {
    const navRef = useRef();




    const showNavbar = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
        )
    }


    return (
        <header>
            <div id="home">
                <img alt='dentalicon' src={chef} className="dentalicon"/>
            </div>
        <nav ref={navRef}>
            <a href="#Home" onClick={showNavbar}>Home</a>
            <a href="#About" onClick={showNavbar}>About</a>
            <a href="#Menu" onClick={showNavbar}>Menu</a>
            <a href="#Contact" onClick={showNavbar}>Contact</a>
            <button className='navbar-btn nav-close-btn' onClick={showNavbar} >
                <FaTimes />
            </button>
        </nav>
            <button className='navbar-btn' onClick={showNavbar} >
                <FaBars />
            </button>
        </header>
    )
}

export default Navbar