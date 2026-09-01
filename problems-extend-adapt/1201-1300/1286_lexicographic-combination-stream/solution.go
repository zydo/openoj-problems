package main

import (
	"math/bits"
	"sort"
	"strings"
)

type CombinationStream struct {
	combinations []string
	position     int
}

// NewCombinationStreamTyped is the design-replay constructor.
func NewCombinationStreamTyped(letters string, length int) *CombinationStream {
	// Precompute all combinations via bitmask enumeration. With n <= 15
	// there are at most 2^15 masks; a mask is kept when its popcount
	// equals the combination length. Ascending mask order groups the
	// strings by their highest chosen index rather than by first letter,
	// so an explicit sort restores the lexicographic sequence.
	iterator := &CombinationStream{}
	n := len(letters)
	for mask := 0; mask < 1<<n; mask++ {
		if bits.OnesCount(uint(mask)) != length {
			continue
		}
		var sb strings.Builder
		for i := 0; i < n; i++ {
			if mask>>i&1 == 1 {
				sb.WriteByte(letters[i])
			}
		}
		iterator.combinations = append(iterator.combinations, sb.String())
	}
	sort.Strings(iterator.combinations)
	return iterator
}

func (design *CombinationStream) next() string {
	combo := design.combinations[design.position]
	design.position++
	return combo
}

func (design *CombinationStream) hasNext() bool {
	return design.position < len(design.combinations)
}
