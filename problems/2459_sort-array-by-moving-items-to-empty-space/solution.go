func sortArray(nums []int) int {
	n := len(nums)
	opsFor := func(target []int) int {
		sigma := make([]int, n)
		for i, v := range nums {
			sigma[i] = target[v]
		}
		blank := -1
		for i, v := range nums {
			if v == 0 {
				blank = i
				break
			}
		}
		visited := make([]bool, n)
		total := 0
		for i := 0; i < n; i++ {
			if visited[i] {
				continue
			}
			length := 0
			hasBlank := false
			j := i
			for !visited[j] {
				visited[j] = true
				if j == blank {
					hasBlank = true
				}
				length++
				j = sigma[j]
			}
			if hasBlank {
				total += length - 1
			} else if length >= 2 {
				total += length + 1
			}
		}
		return total
	}
	targetA := make([]int, n)
	targetB := make([]int, n)
	targetA[0] = n - 1
	for v := 1; v < n; v++ {
		targetA[v] = v - 1
	}
	for v := 0; v < n; v++ {
		targetB[v] = v
	}
	a := opsFor(targetA)
	b := opsFor(targetB)
	if a < b {
		return a
	}
	return b
}
