import React, { Component } from "react";
import ReactDOM from "react-dom";
import './styles.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clock: 1000,
      copo: 'água'
    }
  }
  
  componentDidMount() {
    window.setTimeout(
      () => {
        this.setState({
          copo: 'suco'
        })
      }, 3000 // apos 3 segundos de pois de subir a aplicação o valor do button muda pra 'suco', se mudar diretamente this.state.copo = valor não tem efeito, entao má prática
    )
  }

  alterarCopo = () => {
    this.setState({
      copo: 'refrigerante' // alterar state do react usar setState
    })
  }

  render() {
    const { clock, copo } = this.state
    return(
      <div>
        <h1>{clock}</h1>
        <button onClick={() => this.alterarCopo()}><h1>{copo}</h1></button>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
