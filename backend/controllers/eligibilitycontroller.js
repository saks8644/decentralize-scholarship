const { checkOnChainEligibility } = require('../blockchain/web3Config');

exports.checkEligibility = async (req, res) => {
    const { walletAddress } = req.body;

    if (!walletAddress) {
        return res.status(400).json({ error: 'Wallet address is required' });
    }

    try {
        const isEligible = await checkOnChainEligibility(walletAddress);
        res.json({ eligible: isEligible });
    } catch (error) {
        console.error('Error checking eligibility:', error);
        res.status(500).json({ error: 'Failed to check eligibility' });
    }
};
