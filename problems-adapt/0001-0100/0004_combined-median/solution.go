import "math"

func combinedMedian(first []int, second []int) float64 {
	// Keep first as the shorter array: smaller search space, and the
	// partner cut j is guaranteed to land inside [0, n].
	if len(first) > len(second) {
		first, second = second, first
	}
	m, n := len(first), len(second)
	total := m + n
	half := total / 2
	lo, hi := 0, m
	for {
		// Binary-search the cut: i = elements first gives to the left
		// half; the cut in second is then forced by the half's size.
		i := (lo + hi) / 2
		j := half - i
		// Sentinels make edge cuts well-defined: a cut at 0 or past the
		// end needs no special casing.
		aLeft, aRight := int64(math.MinInt), int64(math.MaxInt)
		if i > 0 {
			aLeft = int64(first[i-1])
		}
		if i < m {
			aRight = int64(first[i])
		}
		bLeft, bRight := int64(math.MinInt), int64(math.MaxInt)
		if j > 0 {
			bLeft = int64(second[j-1])
		}
		if j < n {
			bRight = int64(second[j])
		}
		// Both arrays are sorted, so comparing across the cut suffices:
		// everything on the left is <= everything on the right.
		if aLeft <= bRight && bLeft <= aRight {
			lo64 := aLeft
			if bLeft > lo64 {
				lo64 = bLeft
			}
			hi64 := aRight
			if bRight < hi64 {
				hi64 = bRight
			}
			// lo64/hi64 are the largest left and smallest right elements.
			if total%2 == 1 {
				// Odd total: the left half was made the smaller side.
				return float64(hi64)
			}
			return float64(lo64+hi64) / 2
		}
		if aLeft > bRight {
			// first is contributing too many elements to the left half.
			hi = i - 1
		} else {
			lo = i + 1
		}
	}
}
