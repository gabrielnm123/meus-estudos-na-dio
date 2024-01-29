const path = require('path');

module.exports = {
  // mode: 'production', // nao precisa pois ja passei no package.json
  entry: './src/index.jsx', // ponto de entrada
  output: {
    path: path.resolve(__dirname, 'dist'), // path.resolve pega o diretorio raiz do projeto, gerando a pasta dist, como foi determinado por convenção, ou build tbm
    filename: 'bundler.js' // nome do bundle
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader' // faz a transpilação
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'] // pra poder usar o jsx tbm
  }
};
