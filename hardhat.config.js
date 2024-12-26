require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    goerli: {
      url: "YOUR_INFURA_OR_ALCHEMY_URL",
      accounts: ["c3fe7fccf86f93d45df188f2b3d4071e0c356239beca6fac76f85377bda33cbd"],
    },
    sepolia: {
      url: "https://sepolia.infura.io/v3/7f9a01e80681482488352af2d3eaf394",
      accounts: ["c3fe7fccf86f93d45df188f2b3d4071e0c356239beca6fac76f85377bda33cbd"]
    }
  },
  etherscan: {
    apiKey: "EG7PNYSRV2BJISJNH8SVRJ81ZYRM1TKKUR",
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 400000
  },
  solidity: {
    compilers: [
      {
        version: "0.8.7",
        settings: {
          optimizer: {
            enabled: true,
            runs: 500,
          },
        },
      },
      {
        version: "0.8.28",
        settings: {
          optimizer: {
            enabled: true,
            runs: 500,
          },
        },
      },
      {
        version: "0.8.13",
        settings: {
          optimizer: {
            enabled: true,
            runs: 500,
          },
        },
      },
      {
        version: "0.7.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 500,
          },
        },
      },
      {
        version: "0.5.16",
      },
      {
        version: "0.6.6",
      },
      {
        version: "0.6.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 500,
          },
        },
      },
    ],
  }
};
