package main

type ChunkRegistry struct{}

func NewChunkRegistryTyped(chunks int) *ChunkRegistry {
	panic("TODO")
}

func (design *ChunkRegistry) join(ownedChunks []int) int {
	panic("TODO")
}

func (design *ChunkRegistry) leave(userID int) {
	panic("TODO")
}

func (design *ChunkRegistry) request(userID int, chunkID int) []int {
	panic("TODO")
}
