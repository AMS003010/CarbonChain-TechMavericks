const { ethers } = require("hardhat");

async function main() {
    
    console.log('Getting the Carbon Chain token contract...');
    const contractAddress = '__contract_address__';
    const CarbonChainToken = await ethers.getContractAt('CarbonChainToken', contractAddress);
    const name = await CarbonChainToken.name();
    const symbol = await CarbonChainToken.symbol();
    const decimals = await CarbonChainToken.decimals();
    const recipientAddress = '__receiving_address__';
    const ownerAddress = '__sender_address__';
    const signers = await ethers.getSigners();
    
    
    console.log('Initiating a transfer...');
    const transferAmount = 100;
    console.log(`Transferring ${transferAmount} ${symbol} tokens to ${recipientAddress} from ${ownerAddress}`);
    await CarbonChainToken.transfer(recipientAddress, ethers.utils.parseUnits(transferAmount.toString(), decimals));
    console.log('Transfer completed');
    ownerBalance = await CarbonChainToken.balanceOf(ownerAddress);
    console.log(`Balance of owner (${ownerAddress}): ${ethers.utils.formatUnits(ownerBalance, decimals)} ${symbol}`);
    let recipientBalance = await funToken.balanceOf(recipientAddress);
    console.log(`Balance of recipient (${recipientAddress}): ${ethers.utils.formatUnits(recipientBalance, decimals)} ${symbol}\n`);

}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exitCode = 1;
    });