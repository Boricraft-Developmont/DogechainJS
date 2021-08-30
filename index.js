const axios = require('axios')

const instance = axios.create({
    baseURL: 'https://www.dogechain.info',
    timeout: 1000,
})

exports.getBalance = function(address){


function getBal(address) {
    const path = '/api/v1/address/balance/' + address;

    return new Promise(function (resolve, reject) {
        instance.get(path).then(
            (response) => {
                var result = response.data;
                resolve(result);
            },
                (error) => {
                reject(error);
            }
        );
    })
}

async function mainBalGet(){
const bal = await getBal(address)
return(bal.balance);
}

const dogebal = mainBalGet()
return dogebal;

}