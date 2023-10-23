const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {

  entry: {
    index: path.resolve(__dirname, 'src/views', 'index.ts'),
    models: [
      path.resolve(__dirname, 'src/models', 'Resultado.ts'),
      path.resolve(__dirname, 'src/models', 'Robo.ts'),
      path.resolve(__dirname, 'src/models', 'Rotas.ts'),
      path.resolve(__dirname, 'src/models', 'TiposDeBuscaEnum.ts'),
      path.resolve(__dirname, 'src/models', 'Vertice.ts'),
    ],
    algoritimos: [
      path.resolve(__dirname, 'src/algoritimos-de-busca', 'Busca.ts'),
      path.resolve(__dirname, 'src/algoritimos-de-busca', 'BuscaGulosa.ts'),
      path.resolve(__dirname, 'src/algoritimos-de-busca', 'BuscaLargura.ts'),
      path.resolve(__dirname, 'src/algoritimos-de-busca', 'BuscaProfundidade.ts'),
    ]
  },  
  
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }      
    ]
  },

  // aliases
  resolve: {
    extensions: ['.ts', '.js', '.css'],

    alias: {
      assets: path.resolve(__dirname, 'src/assets')
    }
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/views', 'index.html'),
      chunks: ['index']
    }),

    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/assets', to: 'assets' }
      ]
    })
  ],

  // Ambiente de desenvolvimento
  devtool: 'source-map',
  
  devServer: {
    liveReload: true,
    port: 8080,
    static: {
      directory: path.resolve(__dirname, 'dist')
    },
    watchFiles: {
      paths: ['src']
    }
  }
};