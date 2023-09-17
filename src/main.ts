import {BlockType, BlockchainType} from './types'



class Block {
    block: BlockType;

    constructor(previousHash:string, nonce: number) {
        const timestamp = this.getUnixTime();
        this.block = {previousHash, timestamp, transactions:[], nonce}
    }

    getUnixTime() {
        return Math.ceil(new Date().getTime()/1000)
    }

    print() {
        console.table(this.block)
    }

}

class Blockchain {
    blockchain:BlockchainType = {
        chain: [],
        transactionPool: []
    }
    constructor() {
        const b = new Block("Genesis", 0).block;
        this.blockchain.chain.push(b)
    }

    createBlock(previousHash: string, nonce: number) {
        const newBlock = new Block(previousHash, nonce).block;
        this.blockchain.chain.push(newBlock)
        return newBlock;
    }
}

function main() {
    const bc = new Blockchain();
    bc.createBlock("hash 1", 1);
    console.table(bc.blockchain.chain)
}

main();


