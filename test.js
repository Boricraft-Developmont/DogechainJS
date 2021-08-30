const dogechain = require('./index.js');

async function main(){
    const bal = await dogechain.getBalance('DB35CUGKNV3e36Lh354cjTSos7REWn5rJv');
    console.log(bal);
}

main()