const path = require('path')


module.exports = {
    // Example setup for your project:
    // The entry module that requires or imports the rest of your project.
    // Must start with `./`!
    entry: './src/photo_customize.js',
    mode: process.env.DEBUG ? 'development' : 'production',
    output: {
        path: __dirname + '/dist',
        filename: 'photo_customize.js',
    },
    devtool: "eval",
}