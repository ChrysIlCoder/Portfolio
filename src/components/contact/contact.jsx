import '../../App.css'
import { SIZES, COLORS } from '../../constants/styles'
import messageIcon from '../../assets/logos/message.svg'
import emailIcon from '../../assets/logos/email.svg'

export default function Scrivimi(){
    return (
        <section>
            <div className='contact-container' id='scrivimi'>
                <h2 style={COLORS.secondaryColor}>Hai qualche domanda?</h2>
                <h3>Scrivimi pure ↩</h3>
                <div className='contact-info'>
                    <div className='info'>
                        <label><img src={messageIcon} alt="" /></label>
                        <span>+39 3515130308</span>
                    </div>
                    <div className='info'>
                        <label><img src={emailIcon} alt="" /></label>
                        <span>chri.boffa@gmail.com</span>
                    </div>
                </div>
            </div>
        </section>
    )
}