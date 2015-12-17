module.exports = {
    entry: "./app/components/Main.js",
    output: {
        filename: 'public/bundle.js'
    },
    module: {
        loaders: [
            {
                test: __dirname + '/app',
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};