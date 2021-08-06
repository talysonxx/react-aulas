import React, {useState} from 'react'

const carros = [
  {
    categoria: 'esporte',
    preco: 1000,
    modelo: 'golf gti'
  },
  {
    categoria: 'suv',
    preco: 12421,
    modelo: 'triton'
  },
  {
    categoria: 'suv',
    preco: 13420,
    modelo: 'ranger'
  },
  {
    categoria: 'caminhonete',
    preco: 9613,
    modelo: 'strada'
  }
]

function linhas(categoriaDigitada) {
  const li = []
  carros.forEach(
    ({categoria, preco, modelo}) => {
      if (categoria.toUpperCase() == categoriaDigitada.toUpperCase() || categoriaDigitada.toUpperCase() == '') {
        li.push(
          <tr>
            <td>{categoria}</td>
            <td>{preco}</td>
            <td>{modelo}</td>
          </tr>
        )
      }
    }
  )

  return (
    li 
  )
}

// function adicionaraCategoria(categoria = 'não fornecido', preco = 0, modelo = 'não fornecido') {
//   carros.push({
//     categoria,
//     preco,
//     modelo
//   })
// }
function pesquisarCategoria(categoriaDigitada, stateCarro) {
  return (
    <div>
      <label>Digite uma nova categoria</label>
    <input type="text" value={categoriaDigitada} onChange={({target: {value}}) => stateCarro(value)}></input>
    </div>
  )
}
function tabelaCarros(categoriaDigitada) {
  return (
      <table border='1' style={{borderCollapse: 'collapse'}}>
         <thead>
            <tr>
              <th>Categoria</th>  
              <th>Preço</th>  
              <th>Modelo</th>  
            </tr> 
          </thead>
          <tbody>
            {linhas(categoriaDigitada)}
          </tbody>
      </table>
  )
}

export default function App() {
  // const [adicionar, setAdicionar] = useState(false)
  const [categoria, setCategoria] = useState('')
  // const [novo, setNovo] = useState([{
  //   categoria: '',
  //   preco: 0,
  //   modelo: ''
  // }])

  // function inputAdicinar() {
  //   if (adicionar) {
  //     return (
  //       <div>
  //         <input type="text" onChange={({target: {value}}) => setNovo([{categoria: value, preco: novo[0].preco, modelo: novo[0].modelo}])} placeholder='categoria'></input>
  //         <input type="text" onChange={({target: {value}}) => setNovo([{categoria: novo[0].categoria, preco: value, modelo: novo[0].modelo}])} placeholder='preco'></input>
  //         <input type="text" onChagen={({target: {value}}) => setNovo([{categoria: novo[0].categoria, preco: novo[0].preco, modelo: value}])} placeholder='modelo'></input>
  //         <button onClick={() => adicionarNovoCarro()}>confirmar</button>
  //       </div>
  //     )
  //   }
  // }
  // function adicionarNovoCarro() {
  //   carros.push(novo)
  // }

  return (
    <>
      {pesquisarCategoria(categoria, setCategoria)}
      <br/>
      {tabelaCarros(categoria)}

      {/* <button onClick={() => setAdicionar(!adicionar)}>Quer adicionar uma nova categoria?</button>
      {inputAdicinar()} */}
    </>
  );
}
