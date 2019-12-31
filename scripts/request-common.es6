const axios = require('axios')
const dotenv = require('dotenv')
dotenv.config({path: __dirname + '/../.env'})

const apiStem = axios.create({
    baseURL: 'https://xxphoto-editor-storexx.myshopify.com/admin/api/2019-10/',
    timeout: 1000,
    headers: {'X-Shopify-Access-Token': process.env.SHOPIFY_ACCESS_TOKEN}
})

module.exports = {apiStem}