const { SHA256 } = require("crypto-js");

/* ===== Block Class =========================
    Class with a constructor for a block     |
    ========================================*/

class Block {
    constructor(data) {
        this.hash = "",
            this.height = 0,
            this.body = data,
            this.time = 0,
            this.previousHash = "0x"
    }
}

/* ===== Blockchain Class =========================
    Class with a constructor for a new blockchain  |
    ==============================================*/

class Blockchain {
    constructor() {
        this.chain = [];
        this.addBlock(new Block('Genesis Block'));
    }

/**
 * addBlock adds a new Block object to the chain
 * @param {Block} newBlock 
 */
    addBlock(newBlock) {
        newBlock.height = this.chain.length;
        newBlock.time = new Date().getTime().toString().slice(0,-3);
        if(this.chain.length>0){
            newBlock.previousHash=this.chain[this.chain.length-1].hash;
        }
        newBlock.hash= SHA256(JSON.stringify(newBlock)).toString();
        this.chain.push(newBlock);
    }
}