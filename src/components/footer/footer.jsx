import '../../App.css'
import { Link } from 'react-scroll'
import { COLORS } from '../../constants/styles'

export default function Footer(){
    return (
        <footer className='footer-container'>
            <h3 className='footer-copyright'>Copyright © 2023. Tutti i diritti riservati</h3>
            <ul className='footer-menu'>
                <li><a href="https://github.com/ChrysIlCoder" target='_blank' className='nav-link'>Il Mio Github</a></li>
                <li><Link style={COLORS.secondaryColor} to='me' smooth={true} duration={500} className='nav-link'>Torna all'inizio ↺</Link></li>
            </ul>
        </footer>
    )
}