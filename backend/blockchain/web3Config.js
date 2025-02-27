const { Web3 } = require('web3');
const path = require('path');
require('dotenv').config();

const contractABI = require('../contracts/ScholarshipContract.json');  // ✅ ABI lives in contracts folder
const contractAddress = process.env.CONTRACT_ADDRESS;                  // Store contract address in .env

// Initialize Web3 instance
const web3 = new Web3(process.env.BLOCKCHAIN_NODE_URL);

// Create contract instance
const scholarshipContract = new web3.eth.Contract(contractABI, contractAddress);

// Function to check eligibility on-chain
async function checkOnChainEligibility(walletAddress) {
    const result = await ScholarshipContract.methods.checkEligibility(walletAddress).call();
    return result;
}

// Export the function so controller can use it
module.exports = {
    checkOnChainEligibility
};
