import "sort"

func putMarbles(weights []int, k int) int64 {
	if k == 1 {
		return 0
	}
	n := len(weights)
	adj := make([]int64, n-1)
	for i := 0; i+1 < n; i++ {
		adj[i] = int64(weights[i]) + int64(weights[i+1])
	}
	sort.Slice(adj, func(a, b int) bool { return adj[a] < adj[b] })
	m := k - 1
	var ans int64
	for i := 0; i < m; i++ {
		ans += adj[n-2-i] - adj[i]
	}
	return ans
}
