import '../../App.css'

export default function LavoriCard({ portrait, name, desc, link, prog, right, download }){
    return (
        <div className='jobcard' style={{ flexDirection: `${right ? 'row-reverse' : 'row'}`}}>
            <img src={portrait} alt='Immagine Lavoro' className='job-image'/>
            <hr className='job-hr'/>
            <div className='job-info' style={{ textAlign: `${right ? 'right' : 'left'}`, alignItems: `${right ? 'end' : 'start'}`}}>
                <h1 className='job-title'>{name}</h1>
                <p className='job-desc' dangerouslySetInnerHTML={{ __html: desc }}></p>
                <a href={link} className='job-link' download={`${download ? link : false}`} target='_blank'>Visualizza lavoro ↳</a>
                <details className='used-prog-list'>
                    <summary>Programmi usati</summary>
                    <ul>
                        {prog.map((prog, index) => (<li key={index}>{prog}</li>) )}
                    </ul>
                </details>
            </div>
        </div>
    )
}