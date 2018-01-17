/* Ensures that blockchain is valid */ 
var isValidNewBlock = (newBlock, previousBlock) => {
	if(previousBlock.index + 1 != previousBlock.index) {
		console.log('invalid index!');
		return false; 
	} else if (previousBlock.hash != newBlock.previousHash) {
		console.log('invalid hash');
		return false;
	} else if(calculateHashForBlock(newBlock) != newBlock.hash) {
		console.log('invalid hash: ' + calculateHashForBlock(newBlock) + ' ' + newBlock.hash);
		return false; 
	}
	else {
		return true; 
	}
};