import React from 'react';

const buttonA = <button type="button">Histórico dos Clientes</button>;
const buttonB = <button type="button">Cadastrar Clientes</button>;
const hasCustomer = true;
const showEvento = () => {
  console.log('Cliquei!!!')
}
const handleChange = (e) => {
  const { value } = e.target
  console.log(value)
}
const Button = <button onClick={showEvento}>Clicar Executa um log no DOM</button>
const Input = <input type="input" onChange={handleChange}/> // onchange pra executar a função toda vez que aver interação

// lista e chaves
const customerList = [
  {
    id: 1,
    name: 'Gabriel Nunes',
    skill: ['react', 'node', 'python', 'javascript', 'django'],
  },
  {
    id: 2,
    name: 'Isabel Nunes',
    skill: ['html', 'kotlin', 'javascript', 'django'],
  },
  {
    id: 3,
    name: 'Ivanira Nunes',
  },
  {
    id: 4,
    name: 'Jose Nunes',
    skill: ['html', 'kotlin', 'java'],
  },
];

function App() {
  const deletar = (e, id) => {
    alert(`ID do Cliente: ${id}`)
  }
  const name = 'DIO'
  const alerta = () => {
    alert(name)
  }
  const BUTTON = <button onClick={alerta}>ALERTA</button>
  const renderShowHistory = (
    <div>
      Clique pra apresentar o Históricode de Clientes
      <br />
      {buttonA}
    </div>
  );
  const renderAddCustomer = (
    <div>
      Clique pra apresentar o Históricode de Clientes
      <br />
      {buttonB}
    </div>
  );
  const customer = 'Gabriel Nunes';
  const showCustomer = () => {
    if (!hasCustomer) return null; // negando o hastCustomer
    return (
      <div>
        <h1>
          Nome do Cliente:
          {customer}
        </h1>
      </div>
    );
  };
  const renderCustomer = (customer) => (
    <div key={`customer - ${customer.id}`}>      
      <li>{customer.name} <button onClick={(e) => deletar(e, customer.id)}>Deletar Cliente X</button></li>
      {' '}
      {/* as keys devem ser unicas somente com elementos irmãos, é aconselhavel não colocar a chave diretamente, pois deve deixar claro que tipo de chave é ela, melhor passar como string e especificando que tipo de chave é ela */}
      {customer.skill && customer.skill.map(renderSkills)}
      {' '}
      {/* pra saber quando tem skill ou não, pq se não tiver e não ouver o se da erro e nada é renderizado */}
    </div>
  );
  const renderSkills = (skill, index) => (
    <div style={{ paddingLeft: '30px' }} key={`skill - ${index}`}>
      <li>{skill}</li>
    </div>
  );
  return (
    <div>
      <p>Digital Innovation One</p>
      <p>Bem vindo a nossa aula =D.</p>
      {/* {hasCustomer && ( // caso for verdadeiro vai apresentar o valor encapsulado
        <div>
          Clique pra apresentar o Históricode de Clientes
          <br />
          {buttonA}
        </div>
      )}
      {hasCustomer1 ? ( // aqui eu vou fazer if else
        <div>
          Clique pra apresentar o Históricode de Clientes
          <br />
          {buttonA}
        </div>
      ) : ( // else
        <div>
          clique abaixo pra cadastrar um cliente
          <br />
          {buttonB}
        </div>
      )} */}
      {/* uma forma considerada mais organizada */}
      {hasCustomer ? renderShowHistory : renderAddCustomer}
      <p>
        Valor do hastCustomer:
        {String(hasCustomer)}
      </p>
      <div>
        {showCustomer()}
      </div>
      <div>
        <ul>
          {customerList.map(renderCustomer)}
          {' '}
          {/* map vai correr o array e pegar cada valor pra ser executado na função passada, no caso so esta listando */}
        </ul>
      </div>
      {Input}
      {Button}
      {BUTTON}
    </div>
  );
}

export default App;
