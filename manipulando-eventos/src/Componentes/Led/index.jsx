import LedVerde from '../Imagens/led-verde.jpg'
import LedVermelho from '../Imagens/led-vermelho.jpg'

export default function Led({ligado, alterarLigado}){
    const cancelar = (event) => { event.preventDefault() }

    return(
        <>
            <img style={{width: '100px'}} src={ligado ? LedVerde : LedVermelho}/>
            <br/>
            <button onClick={() => alterarLigado(!ligado)}>{ligado ? 'desligar' : 'ligar'}</button>
            <br/>

            
            {/* links que não fazem nada */}
            <a href="https://www.youtube.com/cfbcursos" target="_blank" onClick={(event) => cancelar(event)}>CFB Cursos</a>

            <button onClick={(event) => window.console.log(event.target)}>EU</button>
        </>
    )
}