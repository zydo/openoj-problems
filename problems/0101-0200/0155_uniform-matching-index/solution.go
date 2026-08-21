package main

import "math/rand"

type IndexSampler struct {
	positions map[int][]int
}

func NewIndexSamplerTyped(nums []int) *IndexSampler {
	// One pass buckets the indices of every value; drawIndex(target)
	// draws one of that value's index buckets uniformly, so each
	// qualifying index is exactly equally likely.
	positions := make(map[int][]int)
	for index, value := range nums {
		positions[value] = append(positions[value], index)
	}
	return &IndexSampler{positions: positions}
}

func (design *IndexSampler) drawIndex(target int) int {
	indices := design.positions[target]
	return indices[rand.Intn(len(indices))]
}
