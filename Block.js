class Block {
	
	/* Block constructor */
	constructor(index, previousHash, timestamp, data, hash) {
		this.index = index; 
		this.previousHash = previousHash; 
		this.timestamp = timestamp;
		this.data = data;
		this.hash = hash.toString();
	}
}

/* Instance of Genesis Block */
var genesisBlock = () => {
	return new Block(0, "0", 1516220962, "The Block of Genesis: Chapter 1", "816534932c2b7154836da6afc367695e6337db8a921823784c14378abed4f7d7");
};

/*Creates Hash for Block */
var calculateHash = (index, previousHash, timestamp, data) => {
	return CryptoJS.SHA256(index + previousHash + timestamp + data).toString();
};

/* Generates another Block into the chaing */
var generateNextBlock = (blockData) => {
	var previousBlock = getRecentBlock(); 
	var currIndex = previousBlock.index + 1;
	var currTimestamp = new Date().getTime() / 1000;
	var currHash = calculateHash(currIndex, previousBlock.hash, currTimestamp, blockData);

	return new Block(currIndex, previousBlock.hash, currTimestamp, currHash);
};


var blockchain = [getGenesisBlock()];