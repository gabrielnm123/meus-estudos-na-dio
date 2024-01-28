import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import './styles.css'

const element = 'Digital Innovation';
const element2 = <h1>Olá mundo!</h1>

function app() {
  return (
    <div> {/* o escopo do react permite retornar somente um elemento, então colocamos uma tag somente pra ele retornar */}
      {element}
      {element2}
    </div>
  )
}

function app2() {
  return (
    <Fragment> {/* não retorna a tag, mas somente os elementos contidos no fragmento */}
      {element}
      {element2}
    </Fragment>
  )
}

const rootElement = document.getElementById('root');
ReactDOM.render(app2(), rootElement);
