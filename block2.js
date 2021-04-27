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

/* ===== Blockchain ===================================
|  Class with a constructor for blockchain data model  |
|  with functions to support:                          |
|     - createGenesisBlock()                           |
|     - getLatestBlock()                               |
|     - addBlock()                                     |
|     - getBlock()                                     |
|     - validateBlock()                                |
|     - validateChain()                                |
|  ====================================================*/

class Blockchain{
    constructor(){
      // new chain array
      this.chain = [];
  }

  // addBlock method
  addBlock(newBlock){
     this.chain.push(newBlock);
  }
}
    