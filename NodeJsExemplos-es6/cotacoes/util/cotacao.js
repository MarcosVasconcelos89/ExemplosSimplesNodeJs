const request = require('request')

const api_token = 'UnWKQPMQtxr0pby8OejtkO1B6H90YjVXuvqYK0aPTRaQc3JkLEgcruGDtUDC'

const cotacao = (symbol, callback) => {    
    
    const url = `https://www.worldtradingdata.com/api/v1/stock?symbol=${symbol}&api_token=${api_token}`
    
    request({url: url, json: true}, (err, response) =>{
        if(err){
            throw new Error(`Something went wrong: ${err}`)
        }
        
        const parsedJSON = response.body
        
        if(parsedJSON.data === undefined){
            throw new Error(`No data found`)
        }
        const data = {
            symbol: parsedJSON.data[0].symbol,
            description: parsedJSON.data[0].name,
            price: parsedJSON.data[0].price

        }
        callback(data)
    })
}

module.exports = cotacao