

export type BlockType = {
    previousHash: string;
    transactions: string[];
    timestamp: number;
    nonce: number;
}

export type BlockchainType = {
    transactionPool?: string[];
    chain: BlockType[];
}