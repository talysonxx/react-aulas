import Button from "./Button";
import ComponenteA from "./CompoenteA";
import ComponenteB from './ComponenteB';
import Nav from './Nav'
import TestComponent from './TestComponent'

function soma(a = 0, b = 0){
  window.alert(a + b)
}


function nada(){
  let resultado = false
  while(!resultado){
    resultado = window.confirm('você é?')
  }
  alerta()
}
function alerta(){
  window.alert('então você é')
}

function botao(a = 0, b = 0, nome = '', idade = '0 anos'){
  return(
        <Button onClick={() => soma(a, b)} name={nome} age={idade}/>
    )
}
function componenteDeTeste(){
  return(
    <div>
      <ComponenteA>
        <ComponenteB>
          {botao(10, 20, 'talyson', '15 anos')}
        </ComponenteB>
      </ComponenteA>
    </div>
  )
}
function App() {
  return (
    <div className="App">
      <h1>Funcionou! kaka</h1>

      {botao(30, 30, 'talyss', '23 anos')}
      {componenteDeTeste()}
      <Nav tamanho="19px" altura="20px" quandoClicado={() => nada()}/>
      <TestComponent quandoClicado={() => test()}/>
    </div>
  );
}

function test(){
    // elemento.style.color = 'red'
    window.alert('okokokok')
}

export default App;