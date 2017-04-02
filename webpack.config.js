var path = require('path');
var webpack = require('webpack');
// create style.css in dist
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSASS = new ExtractTextPlugin('css/style-[contenthash:10].css');
// create index.html in dist
var HTMLWebpackPlugin = require('html-webpack-plugin');


var DEVELOPMENT = process.env.NODE_ENV === 'development';
var PRODUCTION = process.env.NODE_ENV === 'production';

var entry = PRODUCTION
    ?   ['./src/index.js']
    :   [
            './src/index.js',
            'webpack/hot/dev-server',
            'webpack-dev-server/client?http://localhost:3000'
        ];

var plugins = PRODUCTION

    ? [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings:       false,
                drop_console:   true,
                unsafe:         true
            }
        }),
        extractSASS,
        new HTMLWebpackPlugin({
            template: 'index-tmp.html'
        })
      ]
    : [ new webpack.HotModuleReplacementPlugin() ];

plugins.push(
    new webpack.DefinePlugin({
        DEVELOPMENT: JSON.stringify(DEVELOPMENT),
        PRODUCTION: JSON.stringify(PRODUCTION)
    })
);

// create name of local css
var cssIdentifier = PRODUCTION ? '[hash:base64:10]' : '[path][name] === [local]';

var cssLoader = PRODUCTION
    ?   extractSASS.extract(['css-loader?localIdentName=' + cssIdentifier + '?sourceMap' +
            '!autoprefixer-loader?browsers=last 2 version' +
            '!sass-loader?sourceMap=source-map-scss-inline'])


    :   [
            'style-loader',
            'css-loader?localIdentName=' + cssIdentifier + '?sourceMap' +
            '!autoprefixer-loader?browsers=last 2 version' +
            '!sass-loader?sourceMap=source-map-scss-inline'
        ]

module.exports = {
    devtool: 'source-map',
    entry: entry,
    plugins: plugins,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'react-hot-loader',
                  loader: 'babel-loader',
                  options: {
                    plugins: [require('babel-plugin-transform-object-rest-spread')]
                  }
                }
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: 'file-loader?name=img/name=[name].[ext]',
                exclude: '/node_module/'
            },
            {
                test: /\.scss$/,
                use: cssLoader,
                exclude: '/node_module/'
            }
        ]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: PRODUCTION ? '/' : '/dist/',
        filename: PRODUCTION ? 'bundle.[hash:12].min.js' : 'bundle.js'
    }
};
