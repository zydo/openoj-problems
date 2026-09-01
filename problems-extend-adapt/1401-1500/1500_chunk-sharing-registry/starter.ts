class ChunkRegistry {
    constructor(chunks: number) {}

    join(ownedChunks: number[]): number {}

    leave(userID: number) {}

    request(userID: number, chunkID: number): number[] {}
}
