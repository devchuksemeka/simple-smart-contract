const HDWalletProvider = require('truffle-hdwallet-provider')
const Web3 = require('web3')
const {interface,bytecode} = require('./compile')

const provider = new HDWalletProvider(
    'festival misery rabbit soap doll ride voice gift emerge height near letter', // unlocks the account using the mnemonic
    'https://rinkeby.infura.io/v3/634f0f4f0b07413885957430833c4509'
)

const web3 = new Web3(provider)


const deploy = async () => {
    // get list of accounts
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account ', accounts[0])

    const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
        data: bytecode,
        arguments: ['Hi there!']
    })
    .send({
        from: accounts[0],
        gas: '1000000'
    })

    console.log('Contract deploy to ', result.options.address)
}

deploy()


// const result = await new web3.eth.Contract(JSON.parse(interface))
//      .deploy({data: '0x' + bytecode, arguments: ['Hi there!']}) // add 0x bytecode
//      .send({from: accounts[0]}); // remove 'gas'