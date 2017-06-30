const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './game/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'game.js'
    },
    resolve: {
        root: path.resolve(__dirname, 'game')
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: './game/assets',
                to: './game/dist/assets'
            }
        ]),
        new CleanWebpackPlugin([
            'dist'
        ], {
            root: __dirname,
            verbose: true
        })
    ]
}
