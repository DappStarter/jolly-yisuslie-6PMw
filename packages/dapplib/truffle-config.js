require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy kiwi brand venture stuff regret soccer purpose hockey enroll equal gas'; 
let testAccounts = [
"0xa6cadb7b2c95a2cb945218c7f694f427a5729e13f15a6984c735abe902b0c247",
"0x297c58162558e56d5a17df3d53d0dec94187e55c7d53be4adf539fc4c0ce774b",
"0x1b04195134b51eb5f49b2337c73bdda24009cb7354d54151b2b44086b7b2b20c",
"0xf2095b250fd28de1cc22e8d98dc4056949f4bbe9b4d30b5f8abb8ce069f98443",
"0x050e135aa7698187195e379a74c085f08c38d251501f109498d573de83986095",
"0xe4e70d62dffe6fa6cf85c11ce77ca91d1c25fd39e28a705c60f11fb50be097fb",
"0xb5ae2767f3fba9f15fd1216aa85efd5ffffd8df3a60400c8e6be0d1081cc877b",
"0x27aa02c05aebcf117a8c604c508ed0eb023bdcf373ffd3b7fab3751078534dbc",
"0x9b07f818d1ac4689e7689e928d243114e1a163414a694a00c9c78243e63eaad2",
"0x5278e2288c5c9d11a1f44f5966364a3dff9e64c8280699b927d5e2e9550526ee"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

