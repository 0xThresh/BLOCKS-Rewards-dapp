import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.hardhatLocal,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'Morthir',
  tokenName: 'Morthir',
  tokenSymbol: 'MR',
  hiddenMetadataUri: 'ipfs://QmQNAd3qd51yPTMKtzxsu6izyDLQ8wt6kNVFxXJeMQhotQ/book.json',
  maxSupply: 500,
  whitelistSale: {
    price: 0.08,
    maxMintAmountPerTx: 4,
  },
  preSale: {
    price: 0.08,
    maxMintAmountPerTx: 4,
  },
  publicSale: {
    price: 0.08,
    maxMintAmountPerTx: 99,
  },
  contractAddress: '0x8c1DCb77183832f03d5Da525cE12063f6098F0d7',
  marketplaceIdentifier: 'Morthir',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
