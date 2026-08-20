import "sort"

func canonicalWinningPermutation(available []int, opponents []int) []int {
	values := append([]int(nil), available...)
	sort.Ints(values)
	size := len(values)
	tree := make([]int, size+1)

	update := func(index, delta int) {
		for ; index <= size; index += index & -index {
			tree[index] += delta
		}
	}
	prefixCount := func(index int) int {
		total := 0
		for ; index > 0; index -= index & -index {
			total += tree[index]
		}
		return total
	}
	kthSmallest := func(k int) int {
		index := 0
		remaining := k
		step := 1
		for step < size {
			step <<= 1
		}
		for step > 0 {
			next := index + step
			if next <= size && tree[next] < remaining {
				index = next
				remaining -= tree[next]
			}
			step >>= 1
		}
		return index + 1
	}
	upperBound := func(value int) int {
		return sort.Search(len(values), func(i int) bool { return values[i] > value })
	}

	for rank := 1; rank <= size; rank++ {
		update(rank, 1)
	}

	result := make([]int, 0, len(opponents))
	for _, value := range opponents {
		lessOrEqual := prefixCount(upperBound(value))
		rank := kthSmallest(lessOrEqual + 1)
		if rank > size {
			rank = kthSmallest(1)
		}
		update(rank, -1)
		result = append(result, values[rank-1])
	}
	return result
}
