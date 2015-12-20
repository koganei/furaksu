const path = require('path');

module.exports = {
    entry: [  
      'webpack/hot/dev-server',
      'webpack-dev-server/client?http://localhost:8080',
      path.resolve(__dirname, 'app/components/Main.js')
    ],
    output: {
        path: path.resolve(__dirname, 'public/'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: path.join(__dirname, '/app'),
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react', 'stage-0']
                }
            }
        ]
    }
};
