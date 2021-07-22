import Button from "./Button";
import ComponenteA from "./CompoenteA";
import ComponenteB from './ComponenteB';
import Nav from './Nav'
import './style.css'

function soma(a = 0, b = 0){
  window.alert(a + b)
}


function nada(){
  window.confirm('você é gay?')
}
function App() {
  


  return (
    <div className="App">
      <h1>Funcionou! kaka</h1>

      <Button onClick={() => soma(10, 20)} name="talyson"/>
      <ComponenteA>
        <ComponenteB>
          <Button onClick={() => soma(20, 40)} name="jair messias bolsonaro" age="18 anos"/>
        </ComponenteB>
      </ComponenteA>
      <Nav tamanho="19px" altura="20px" quandoClicado={() => nada()}/>
    </div>
  );
}

export default App;