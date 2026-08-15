import "math"

func findMaxValueOfEquation(points [][]int, k int) int {
	n := len(points)
	dq := make([]int, n)
	head, tail := 0, 0
	best := int64(math.MinInt64)
	for j := 0; j < n; j++ {
		xj, yj := int64(points[j][0]), int64(points[j][1])
		for head < tail && xj-int64(points[dq[head]][0]) > int64(k) {
			head++
		}
		if head < tail {
			xi, yi := int64(points[dq[head]][0]), int64(points[dq[head]][1])
			value := yj + yi + xj - xi
			if value > best {
				best = value
			}
		}
		for head < tail && int64(points[dq[tail-1]][1])-int64(points[dq[tail-1]][0]) <= yj-xj {
			tail--
		}
		dq[tail] = j
		tail++
	}
	return int(best)
}
