require('@nomiclabs/hardhat-waffle');
require('dotenv').config({ path: '.env' });

const { ALCHEMY_API_KEY_URL } = process.env;

const { MUMBAI_PRIVATE_KEY } = process.env;
// const {privateKey1} = process.env;

module.exports = {
  solidity: '0.8.4',
  networks: {
    mumbai: {
      url: ALCHEMY_API_KEY_URL,
      accounts: [MUMBAI_PRIVATE_KEY],
    },
    // goerli: {
    //   url: "https://eth-goerli.g.alchemy.com/v2/RQ8L-kOPeH37IJfs2QLQMY2Bivw6R0gX",
    //   accounts: [privateKey1]
    // },
    hardhat: {
    },
  },
};
