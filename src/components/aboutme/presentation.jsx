import '../../App.css'
import { SIZES } from '../../constants/styles'

export default function Presentation(){
    return (
        <section>
            <div className='grid-lined-background presentation-container' id='home'>
                <div className='presentation-pic'></div>
                <h1 className='presentation-name'>Christian Boffa</h1>
                <p className='presentation-desc'>
                    Un giovane aspirante <span style={SIZES.PSemiBold}>Web Developer & Grafico</span> che vive in <span style={SIZES.PSemiBold}>Italia, Vicenza</span>📍
                </p>
            </div>
        </section>
    )
}