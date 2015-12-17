const path = require('path');

module.exports = {
    entry: './app/components/Main.js',
    output: {
        filename: 'public/bundle.js'
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
