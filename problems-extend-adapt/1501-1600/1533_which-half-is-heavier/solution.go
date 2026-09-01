package main

type Solution struct{}

func (solution *Solution) heavierHalf(balanceReader *BalanceReader) int {
	// Divide and conquer: compare two equal-length halves of the current
	// range and recurse into whichever sums higher — the large entry
	// inflates exactly one side. An odd-length range peels off its
	// middle element first; a tied comparison of the remaining
	// equal-length halves means that peeled element is the large one.
	return solveGetIndex(balanceReader, 0, balanceReader.Length()-1)
}

func solveGetIndex(balanceReader *BalanceReader, l int, r int) int {
	if l == r {
		return l
	}
	length := r - l + 1
	mid := (l + r) / 2
	if length%2 == 0 {
		cmp := balanceReader.CompareSub(l, mid, mid+1, r)
		if cmp > 0 {
			return solveGetIndex(balanceReader, l, mid)
		}
		return solveGetIndex(balanceReader, mid+1, r)
	}
	cmp := balanceReader.CompareSub(l, mid-1, mid+1, r)
	if cmp == 0 {
		return mid
	}
	if cmp > 0 {
		return solveGetIndex(balanceReader, l, mid-1)
	}
	return solveGetIndex(balanceReader, mid+1, r)
}
