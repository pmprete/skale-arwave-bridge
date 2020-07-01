const Arweave = require('arweave/node');
const Web3 = require('web3');


//Add scheduled time

Promise.resolve().then(async function() {

    //------------- ARWEAVE --------------//
    //This should be passed from the UI
    let config = {}

    let arweave = Arweave.init({
        host: config.host || 'arweave.net',
        port: config.port,
        protocol: config.protocol || 'https',
        timeout: config.timeout || 20000,
        logging: config.logging || false,
    });

    // Documentation https://github.com/ArweaveTeam/arweave-js

    //Example 
    const transaction = await arweave.transactions.get('hKMMPNh_emBf8v_at1tFzNYACisyMQNcKzeeE1QE9p8');
    console.log('--------- ARWEAVE ---------');
    console.log(transaction);

    //---------------- SKALE -------------//
    //Endpoints (this dont have Decentralized Storage or Interchain Messaging)
    //https://forum.skale.network/t/skale-chain-sdk/170?utm_medium=email&_hsmi=89828495&_hsenc=p2ANqtz-83-illQifRCM6_-FDGxffBAAeTsr2Ic0Mqz-bEuCuBnH469Ijeccj2yQQsEiPUGHeNV4CwHcKj4wQkx9dupXUW5BkIQg&utm_content=89828495&utm_source=hs_email


    // https://dev-testnet-v1-0.skalelabs.com
    // ws://161.35.232.134:1233

    // https://dev-testnet-v1-1.skalelabs.com
    // ws://161.35.228.163:1233

    // ChainID=346750 
    // //Chain ID may be needed for wallets and other Ethereum tool integrations
    // Use it as it was ethereum https://web3js.readthedocs.io/en/v1.2.9/

    var web3 = new Web3("https://dev-testnet-v1-0.skalelabs.com");

    let lastBlock = await web3.eth.getBlock('latest');
    console.log('-------- SKALE ----------');
    console.log(lastBlock);

})