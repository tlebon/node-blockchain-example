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
