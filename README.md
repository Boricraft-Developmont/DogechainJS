# DogechainJS
An API wrapper for dogechain

## Features
- Get balance from Dogechain API

## Example
```javascript
const dogechain = require('./index.js');

async function main(){
    const bal = await dogechain.getBalance('DB35CUGKNV3e36Lh354cjTSos7REWn5rJv');
    console.log(bal);
}

main()
```

## Contributing
contributions are always welcome via a pull request on github

## Author
@Boricraft

