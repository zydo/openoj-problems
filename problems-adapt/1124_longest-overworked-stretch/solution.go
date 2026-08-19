func longestOverworkedStretch(hours []int) int {
	// earliest index each prefix value has been seen; {0: -1} lets blocks
	// starting at index 0 be handled uniformly
	first := map[int]int{0: -1}
	prefix := 0
	best := 0
	for i, hoursDay := range hours {
		// heavy day scores +1, light day -1: an overworked block is
		// exactly a subarray whose sum is strictly positive
		if hoursDay > 8 {
			prefix += 1
		} else {
			prefix -= 1
		}
		if prefix > 0 {
			// the whole prefix hours[0..i] is already overworked
			best = i + 1
		} else if j, ok := first[prefix-1]; ok {
			// cut just after the earliest prefix-1: the remainder sums to
			// exactly 1, and since steps are unit-sized no longer block
			// can end at i
			if i-j > best {
				best = i - j
			}
		}
		if _, ok := first[prefix]; !ok {
			// record only the first sighting so stored indices stay leftmost
			first[prefix] = i
		}
	}
	return best
}
