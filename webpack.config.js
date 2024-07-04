module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
   path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.mjs']
  },
  module: {
    rules: [
      {
        test: /.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  experiments: {
    outputModule: true
  }
};
