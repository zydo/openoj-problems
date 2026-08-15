func shortestSubarray(nums []int, k int) int {
	n := len(nums)
	prefix := make([]int64, n+1)
	for i, x := range nums {
		prefix[i+1] = prefix[i] + int64(x)
	}
	dq := make([]int, 0, n+1)
	head := 0
	best := n + 1
	for i := 0; i <= n; i++ {
		p := prefix[i]
		for head < len(dq) && prefix[dq[head]] <= p-int64(k) {
			if i-dq[head] < best {
				best = i - dq[head]
			}
			head++
		}
		for head < len(dq) && prefix[dq[len(dq)-1]] >= p {
			dq = dq[:len(dq)-1]
		}
		dq = append(dq, i)
	}
	if best <= n {
		return best
	}
	return -1
}
