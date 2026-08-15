import "sort"

func matrixMedian(grid [][]int) int {
	m, n := len(grid), len(grid[0])
	need := m*n/2 + 1
	lo, hi := grid[0][0], grid[0][n-1]
	for _, row := range grid {
		if row[0] < lo {
			lo = row[0]
		}
		if row[n-1] > hi {
			hi = row[n-1]
		}
	}
	countLe := func(x int) int {
		total := 0
		for _, row := range grid {
			total += sort.SearchInts(row, x+1)
		}
		return total
	}
	for lo < hi {
		mid := lo + (hi-lo)/2
		if countLe(mid) >= need {
			hi = mid
		} else {
			lo = mid + 1
		}
	}
	return lo
}
