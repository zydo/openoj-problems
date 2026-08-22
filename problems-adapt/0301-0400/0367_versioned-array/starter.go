package main

type VersionedArray struct{}

func NewVersionedArrayTyped(length int) *VersionedArray {
	panic("TODO")
}

func (design *VersionedArray) set(index int, val int) {
	panic("TODO")
}

func (design *VersionedArray) commit() int {
	panic("TODO")
}

func (design *VersionedArray) get(index int, commit_id int) int {
	panic("TODO")
}
