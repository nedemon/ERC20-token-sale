const path = require("path");
require('dotenv').config({path: './.env'});
const HDWalletProvider = require("@truffle/hdwallet-provider");
const MetaMaskAccountIndex = 0;

module.exports = {

  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    development: {
     host: "127.0.0.1",
     port: 7545,
     network_id: "*",
    },
    ganache_local: {
      provider: function() {
          return new HDWalletProvider(process.env.MNEMONIC, "http://127.0.0.1:7545", MetaMaskAccountIndex )
      },
      network_id: 5777
    }
  },
  compilers: {    
    solc: {
    version: "^0.8.0"
    }
}
};
