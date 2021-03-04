require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture infant forget seed edge rare remember protect give private fringe spice'; 
let testAccounts = [
"0xc53d53c48f1e065dcac83bfcc37b1c401b36b9613e25ad7f73519fa5dfcfe691",
"0xfb9f4041205f81c34cd9504cf729b77baafbcbab5a01d28a372e1f80a5b2d7a0",
"0x93aa746c74b9489e62f50d43b2b4f6c90842094ad9d34ba822a687335da81742",
"0x7d2fd575f8f67ec71295a2c198bec427195e1580106660666c2e8ce82609bc1b",
"0x1416f49eac241236cfe672e56f7d25823cc319c8e7a4538332d4551f087281f4",
"0xe594e701a2747ed747aec2ffc0eefb9e5c135b1cabf979badfc1f61f6f77e0b7",
"0xfc7a2912cea93c073f9ae1de87ab259c7c5217712defc6cbfd55a92507d0b748",
"0x44b9c3622e3539ac4f743664b9ddcf7bf2f0952ae5c0127bac0db5f7ab8a6a41",
"0x750ca950ec1ed737b0ee65703e3facc95235a74c372dd7c319c169f1e35cb11d",
"0x8da6a5e122aa5e75a1cc5e8a3687d6d651501f89180e21622e492b8229cd2551"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
