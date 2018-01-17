/* Replaces old blockchain */
var replaceChain = (newblockchain) => {
	if(isValidNewBlock(newblockchain) && newblockchain.length > blockchain.length) {
		console.log('Received valid blockchain. Replacing current blockchain with new blockchain.');
		blockchain = newblockchain;
		broadcast(responseLatestMsg());
	} else {
        console.log('Received blockchain invalid');
    }
};