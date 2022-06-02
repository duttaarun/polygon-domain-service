require("@nomiclabs/hardhat-waffle");
 require('dotenv').config();
 require("@nomiclabs/hardhat-ethers");
 require("@nomiclabs/hardhat-etherscan");
 
 const {  ACCOUNT_PRIVATE_KEY, ALCHEMY_KEY, ALCHEMY_MAINNET_KEY, POLYGON_MUMBAI_KEY } = process.env;
 module.exports = {
   solidity: "0.8.4",
   networks: {
     hardhat: {},
     mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_KEY}`,
      accounts: [`0x${ACCOUNT_PRIVATE_KEY}`]
    },
     polygon: {
      chainId: 137,
      url: `https://polygon-mainnet.g.alchemy.com/v2/${ALCHEMY_MAINNET_KEY}`,
      accounts: [`0x${ACCOUNT_PRIVATE_KEY}`]
    },
   },
   etherscan: {
     apiKey: {
      polygon: `${POLYGON_MUMBAI_KEY}`,
      polygonMumbai: `${POLYGON_MUMBAI_KEY}`
     }
   }
 };
 