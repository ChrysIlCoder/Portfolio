import '../../App.css'
import { SIZES, COLORS } from '../../constants/styles'
import reactLogo from '../../assets/logos/react.svg'
import htmlLogo from '../../assets/logos/html.svg'
import csslogo from '../../assets/logos/css.svg'
import javascriptLogo from '../../assets/logos/javascript.svg'
import illustratorLogo from '../../assets/logos/illustrator.svg'
import photoshopLogo from '../../assets/logos/photoshop.svg'
import premiereLogo from '../../assets/logos/premiere.svg'
import afterEffectsLogo from '../../assets/logos/afterEffects.svg'
import futuro from '../../assets/imgs/Futuro.png'

export default function AboutMe(){
    return (
        <section>
            <div className='aboutme-container' id='chisono'>
                <img src={futuro} alt="Cosa vorrei essere" className='aboutme-picture'/>
                <div className='aboutme-info'>
                    <h2 className='aboutme-title'>Chi sono 🤔</h2>
                    <p className='aboutme-desc'>
                        Ciao! Sono un ragazzo di 16 anni <b>auto-didatta</b> a cui piace tanto programmare e fare grafica. 
                        Sono sempre alla ricerca di nuove opportunità per capire se le mie competenze maturate nel corso degli anni
                        siano effettivamente utili in ambiente lavorativo, oltre che per migliorare il mio <b>skill-set</b> e me stesso.
                    </p>
                    <label style={SIZES.PSemiBold}>Le mie competenze</label>
                    <hr className='aboutme-skills-divisor'/>
                    <div className='aboutme-skills'>
                        <img src={htmlLogo} alt="Logo" />
                        <img src={csslogo} alt="Logo" />
                        <img src={javascriptLogo} alt="Logo" />
                        <img src={reactLogo} alt="Logo" />
                        <img src={illustratorLogo} alt="Logo" />
                        <img src={photoshopLogo} alt="Logo" />
                        <img src={premiereLogo} alt="Logo" />
                        <img src={afterEffectsLogo} alt="Logo" />
                    </div>
                </div>
            </div>
        </section>
    )
}