const path = require('path')
module.exports = {
    // Example setup for your project:
    // The entry module that requires or imports the rest of your project.
    // Must start with `./`!
    entry: {
        photo_customize: './src/photo_customize.js',
        test: './src/test.js'
    },
    mode: process.env.NODE_ENV ? 'development' : 'production',
    output: {
        path: __dirname + '/dist',
        filename: '[name].js',
    },
    devtool: "eval",
    module: {
        rules: [
            {
                test: /\.json$/,
                loader: 'json-loader',
            },
            {
                test: /\.(scss)$/,
                include: [path.resolve(__dirname, 'src/scss'), /bootstrap/],
                use: [{loader: 'style-loader'}, {
                    loader: 'css-loader', // translates CSS into CommonJS modules
                    options: {
                        modules: true,
                    }
                }, {
                    loader: 'postcss-loader', // Run post css actions
                    options: {
                        plugins: function () { // post css plugins, can be exported to postcss.config.js
                            return [
                                require('precss'),
                                require('autoprefixer')
                            ]
                        }
                    }
                }, {
                    loader: 'sass-loader' // compiles Sass to CSS
                }]
            },
            {
                test: /\.(scss)$/,
                include: [path.resolve(__dirname, 'src/inserted_scss')],
                use: [{loader: 'style-loader'}, {
                    loader: 'css-loader', // translates CSS into CommonJS modules
                    options: {
                        modules: false,
                    }
                }, {
                    loader: 'postcss-loader', // Run post css actions
                    options: {
                        plugins: function () { // post css plugins, can be exported to postcss.config.js
                            return [
                                require('precss'),
                                require('autoprefixer')
                            ]
                        }
                    }
                }, {
                    loader: 'sass-loader' // compiles Sass to CSS
                }]
            }
        ],
    },
}