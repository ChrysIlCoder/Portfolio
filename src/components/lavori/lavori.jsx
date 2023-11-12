import '../../App.css'
import LavoriCard from './lavoriCard'
import barJuiceImg from '../../assets/imgs/BarJuice.jpg'
import trovaLavoroImg from '../../assets/imgs/TrovaLavoro.jpeg'
import omegaTerminal from '../../assets/imgs/OmegaTerminal.jpg'
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
                    <LavoriCard
                        portrait={omegaTerminal}
                        name={"Omega Terminal"}
                        desc={`Un finto terminale per la <a href="http://fondazionescp.wikidot.com/">Fondazione SCP</a>. Creato per un contest di un server di un videogioco, il terminale si basa su una finta "fondazione" che ricontiene anomalie, questo terminal è una piccola demo dove parlo di me e uso delle FETCH API`}
                        link={"https://omega-terminal.netlify.app"}
                        prog={["React", "Vanilla CSS"]}
                        right={false}
                    />
                </div>
            </div>
        </section>
    )
}