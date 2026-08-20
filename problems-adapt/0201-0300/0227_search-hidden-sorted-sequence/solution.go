package main

type Solution struct{}

func (solution *Solution) findInSequence(reader *SequenceReader, target int) int {
	// Exponential probe: find the smallest power-of-two index whose
	// value reaches the target (or the out-of-range sentinel, which is
	// larger than any real element).
	hi := 1
	for reader.Get(hi) < target {
		hi *= 2
	}
	// Ordinary binary search for the first index with value >= target.
	lo := 0
	for lo < hi {
		mid := (lo + hi) / 2
		if reader.Get(mid) < target {
			lo = mid + 1
		} else {
			hi = mid
		}
	}
	if reader.Get(lo) == target {
		return lo
	}
	return -1
}
