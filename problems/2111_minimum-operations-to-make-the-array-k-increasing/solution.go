import "sort"

func kIncreasing(arr []int, k int) int {
	longestNondecreasing := func(seq []int) int {
		tails := make([]int, 0, len(seq))
		for _, value := range seq {
			pos := sort.Search(len(tails), func(i int) bool {
				return tails[i] > value
			})
			if pos == len(tails) {
				tails = append(tails, value)
			} else {
				tails[pos] = value
			}
		}
		return len(tails)
	}

	operations := 0
	for start := 0; start < k; start++ {
		sub := make([]int, 0, len(arr)/k+1)
		for i := start; i < len(arr); i += k {
			sub = append(sub, arr[i])
		}
		operations += len(sub) - longestNondecreasing(sub)
	}
	return operations
}
