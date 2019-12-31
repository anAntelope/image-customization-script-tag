#!/usr/bin/env node

const {apiStem} = require("./request-common.es6")

function construct(file) {
    const data = fs.readFileSync(file)
    return JSON.stringify({
        'asset': {
            'key': `sections/${file}`,
            'value': data.toString()
        }
    })
}


const argv = require('yargs').command('get <endpoint>', 'get request', () => {
}, (argv) => {
    apiStem.get(argv.endpoint).then(response => console.log(response.data))

}).command('putScriptTags', 'put script tags', () => {
}, (argv) => {
    apiStem.put('script_tags.json', construct('product-template.liquid')).then(response => console.log(response.data))
}).argv



