import PropTypes from 'prop-types'

function Lista({nome, idade, sobre}) {
  return (
    <>
      <h1>Nome: {nome}</h1>
      <h2>Idade: {idade}</h2>
      <p>Sobre: {sobre}</p>
    </>
  )
}

// propriedades padrões
Lista.defaultProps = {
  idade: 0
}

// chevagem dos valores
Lista.propTypes = {
  nome: PropTypes.string.isRequired,
  sobre: PropTypes.string.isRequired,
  // status: PropTypes.oneOf('Funcionando', 'Desabilitado').isRequired,
  idade: PropTypes.number
}

export default Lista
