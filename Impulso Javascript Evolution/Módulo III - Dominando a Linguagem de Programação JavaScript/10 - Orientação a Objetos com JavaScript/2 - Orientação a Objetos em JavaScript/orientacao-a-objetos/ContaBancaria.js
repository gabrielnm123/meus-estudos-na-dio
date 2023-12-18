class ContaBancaria {
  constructor (agencia, numero, tipo, saldo) {
    this.agencia = agencia;
    this.numero = numero;
    this.tipo = tipo;
    this._saldo = saldo;
  }

  get saldo() {
    return this._saldo;
  }

  set saldo(valor) {
    this._saldo = valor;
  }

  sacar(valor) {
    if (this._saldo < valor) {
      return 'Operação negada';
    }
    this._saldo -= valor;
    return this._saldo;
  }

  depositar(valor) {
    this._saldo += valor;
    return this._saldo;
  }
}

class ContaCorrente extends ContaBancaria {
  constructor (agencia, numero, saldo, cartaoCredito) {
    super(agencia, numero, 'conta corrente', saldo);
    this._cartaoCredito = cartaoCredito;
  }

  get cartaoCredito() {
    return this._cartaoCredito;
  }

  set cartaoCredito(valor) {
    this._cartaoCredito = valor;
  }
}

class ContaPoupanca extends ContaBancaria {
  constructor (agencia, numero, saldo) {
    super(agencia, numero, 'conta poupança', saldo);
  }
}

class ContaUniversitaria extends ContaBancaria {
  constructor (agencia, numero, saldo) {
    super(agencia, numero, 'conta universitária', saldo);
  }

  sacar(valor) {
    if (valor >= 500) {
      return 'Operação negada';
    }
    super.sacar(valor);
  }
}
