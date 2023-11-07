import '../../App.css'
import { Link } from 'react-scroll'
import { useState } from 'react';

export default function Navbar(){
    const scrollTime = 500;
    const [active, setActive] = useState(false)
    const handleBurgerClick = () => {setActive(active => !active)}

    return (
        <header>
            <nav className='navbar'>
                <h1 className='nav-logo'>Chrys.</h1>
                <ul className={`nav-menu ${active ? 'nav-active' : ''}`}>
                    <li><Link onClick={handleBurgerClick} to="chisono" smooth={true} duration={scrollTime} className='nav-link'>Chi Sono</Link></li>
                    <li><Link onClick={handleBurgerClick} to="lavori" smooth={true} duration={scrollTime} className='nav-link'>Lavori</Link></li>
                    <li><Link onClick={handleBurgerClick} to="scrivimi" smooth={true} duration={scrollTime} className='nav-link'>Scrivimi</Link></li>
                </ul>
                <div className='burger' onClick={handleBurgerClick}>
                    <div className='burger-line1'></div>
                    <div className='burger-line2'></div>
                    <div className='burger-line3'></div>
                </div>
            </nav>
        </header>
    )
}