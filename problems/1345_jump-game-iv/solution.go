func minJumps(arr []int) int {
	n := len(arr)
	if n == 1 {
		return 0
	}
	indices := make(map[int][]int)
	for i, value := range arr {
		indices[value] = append(indices[value], i)
	}
	dist := make([]int, n)
	for i := range dist {
		dist[i] = -1
	}
	dist[0] = 0
	queue := []int{0}
	for head := 0; head < len(queue); head++ {
		i := queue[head]
		d := dist[i] + 1
		nexts := []int{i - 1, i + 1}
		nexts = append(nexts, indices[arr[i]]...)
		delete(indices, arr[i])
		for _, j := range nexts {
			if j >= 0 && j < n && dist[j] == -1 {
				dist[j] = d
				if j == n-1 {
					return d
				}
				queue = append(queue, j)
			}
		}
	}
	return dist[n-1]
}
