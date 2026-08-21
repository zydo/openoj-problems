package main

// The pristine original is kept untouched; every shuffle() runs
// Fisher-Yates on a fresh copy — slot i (from the top down) swaps with a
// uniformly chosen slot in [0, i] — so each of the n! orderings is exactly
// equally likely, and reset() is a plain copy. Uniform picks come from a
// splitmix64 stream: the design wrapper compiles the submission into its
// own main with fixed imports, so the tiny generator lives here.
type Solution struct {
	original []int
	random   uint64
}

func NewSolutionTyped(nums []int) *Solution {
	return &Solution{original: append([]int(nil), nums...)}
}

func (design *Solution) nextUint64() uint64 {
	design.random += 0x9E3779B97F4A7C15
	z := design.random
	z = (z ^ (z >> 30)) * 0xBF58476D1CE4E5B9
	z = (z ^ (z >> 27)) * 0x94D049BB133111EB
	return z ^ (z >> 31)
}

func (design *Solution) reset() []int {
	return append([]int(nil), design.original...)
}

func (design *Solution) shuffle() []int {
	array := append([]int(nil), design.original...)
	for i := len(array) - 1; i > 0; i-- {
		j := int(design.nextUint64() % uint64(i+1))
		array[i], array[j] = array[j], array[i]
	}
	return array
}
