import Cabecalho from './componentes/Cabecalho'
import Contador from './componentes/Contador'
import {ContadorProvider} from './componentes/ContadorContexto'

function App() {
  return (
    <>
    <ContadorProvider>
      <Cabecalho/>
      <Contador/>
    </ContadorProvider>
    </>
  )
}

export default App
