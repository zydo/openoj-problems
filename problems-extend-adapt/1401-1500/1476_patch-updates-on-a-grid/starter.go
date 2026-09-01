package main

type PatchableGrid struct{}

func NewPatchableGridTyped(rectangle [][]int64) *PatchableGrid {
	panic("TODO")
}

func (design *PatchableGrid) updatePatch(row1 int, col1 int, row2 int, col2 int, newValue int64) {
	panic("TODO")
}

func (design *PatchableGrid) getValue(row int, col int) int64 {
	panic("TODO")
}
