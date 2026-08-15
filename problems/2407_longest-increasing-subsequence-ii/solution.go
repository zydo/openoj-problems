func lengthOfLIS(nums []int, k int) int {
	size := 1
	for size <= 100000 {
		size *= 2
	}
	tree := make([]int, 2*size)
	query := func(left, right int) int {
		best := 0
		lo, hi := left+size, right+size+1
		for lo < hi {
			if lo&1 == 1 {
				if tree[lo] > best {
					best = tree[lo]
				}
				lo++
			}
			if hi&1 == 1 {
				hi--
				if tree[hi] > best {
					best = tree[hi]
				}
			}
			lo /= 2
			hi /= 2
		}
		return best
	}
	answer := 0
	for _, x := range nums {
		current := query(max(1, x-k), x-1) + 1
		for i := x + size; i >= 1 && tree[i] < current; i /= 2 {
			tree[i] = current
		}
		if current > answer {
			answer = current
		}
	}
	return answer
}
