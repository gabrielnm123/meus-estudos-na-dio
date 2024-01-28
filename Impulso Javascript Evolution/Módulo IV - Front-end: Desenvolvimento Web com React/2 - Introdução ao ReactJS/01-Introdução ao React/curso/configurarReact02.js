import React from "react";
import ReactDOM from "react-dom";
import './styles.css'

function soma(a, b) {
  return a + b
}

function primeiroJSX() {
  return (
    <div className="test"> {/* como no react a class é uma palavra reservada pra outra coisa, então usamos className pra indicar uma classe num html */}
      Gabriel Nunes - Introdução ao ReactJS
      <h1>Soma: {soma(1, 6)}</h1>
    </div>
  )
}

const App = () => {
  return (
    <div className="App">{primeiroJSX()}</div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
