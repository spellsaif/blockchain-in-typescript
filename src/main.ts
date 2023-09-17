import {BlockType} from './types'

class Block {
    block: BlockType;

    constructor(previousHash:string, transactions: string[]) {
        const timestamp = this.getUnixTime();
        this.block = {previousHash, transactions, timestamp, nonce: Math.ceil(Math.random()* 1000)}
    }

    getUnixTime() {
        return Math.ceil(new Date().getTime()/1000)
    }

    print() {
        console.table(this.block)
    }

}

function main() {
    const b = new Block("",[])

    
    b.print()
}

main();


