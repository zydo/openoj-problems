func maxHammingDistances(nums []int, m int) []int {
	size := 1 << m
	full := size - 1
	dist := make([]int, size)
	for i := range dist {
		dist[i] = size + 1
	}
	queue := make([]int, 0, size)
	seen := make(map[int]bool)
	for _, value := range nums {
		if !seen[value] {
			seen[value] = true
			dist[value] = 0
			queue = append(queue, value)
		}
	}
	for head := 0; head < len(queue); head++ {
		v := queue[head]
		nd := dist[v] + 1
		for bit := 0; bit < m; bit++ {
			u := v ^ (1 << bit)
			if dist[u] > nd {
				dist[u] = nd
				queue = append(queue, u)
			}
		}
	}
	result := make([]int, len(nums))
	for i, x := range nums {
		result[i] = m - dist[full^x]
	}
	return result
}
