import React from "react";
import Button from './Button'

const buttonA = <button>Historico dos clientes</button>
const buttonB = <button>Segundo Botão</button>
const hastCustomer = true

const App = () => {
  return (
    <div>
      <p>Digital Innovation One</p>
      <p>Bem vindo a nossa aula =D.</p>
      <p>webpack 4</p>
      <p>testando 1 2</p>
      {hastCustomer && (
        <div> {/* precisa ter os valores encapsulados */}
          Clique no botão pra visualizar o histórico dos clientes
          {buttonA}
        </div>
      )}
      <Button />
      {buttonA}
    </div>
  )
}

export default App;
