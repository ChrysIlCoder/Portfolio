import '../../App.css'
import LavoriCard from './lavoriCard'
import barJuiceImg from '../../assets/imgs/BarJuice.jpg'
import trovaLavoroImg from '../../assets/imgs/TrovaLavoro.jpeg'
import eWaysImg from '../../assets/imgs/E-Ways.jpg'
import eWaysFile from '../../../public/files/E-Ways.ai'
import { COLORS } from '../../constants/styles'

export default function Lavori(){
    return (
        <section>
            <div className='jobs-container grid-dotted-background' id='lavori'>
                <h1>Alcuni dei <span style={COLORS.secondaryColor}>miei</span> lavori</h1>
                <div className='jobs-cards-container'>
                    <LavoriCard
                        portrait={barJuiceImg}
                        name={"Juice Bar"}
                        link={"https://juicy-bar.netlify.app/"}
                        desc={"Crea ricordi gustosi nel nostro Juice Bar, dove l'innovazione incontra la freschezza. Le nostre bevande artigianali, preparate con ingredienti freschi e prelibati, sono un'esperienza unica per il palato, invitandoti a scoprire il mondo del gusto in ogni sorso."}
                        prog={["React", "ThreeJS", "Blender", "Vanilla CSS", "Illustrator", "Photoshop"]}
                        right={false}
                    />
                    <LavoriCard
                        portrait={trovaLavoroImg}
                        name={"Trova lavoro"}
                        desc={`Hai appena finito un corso di programmazione? Sapevi già programmare ma non sai cosa fartene? Ecco la soluzione! <strong>JFinder</strong>! Perché cercare lavoro, quando può farlo qualcun'altro?`}
                        link={"https://github.com/ChrysIlCoder/JFinder"}
                        prog={["React Native", "Javascript", "Vanilla CSS", "Rapid API", "Illustrator"]}
                        right={true}
                    />
                </div>
            </div>
        </section>
    )
}