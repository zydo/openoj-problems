package main

type MemoryMap struct{}

func NewMemoryMapTyped(n int) *MemoryMap {
	panic("TODO")
}

func (design *MemoryMap) allocate(size int, mID int) int {
	panic("TODO")
}

func (design *MemoryMap) freeMemory(mID int) int {
	panic("TODO")
}
