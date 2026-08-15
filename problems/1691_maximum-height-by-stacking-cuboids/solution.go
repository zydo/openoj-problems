import "sort"

func maxHeight(cuboids [][]int) int {
	boxes := make([][]int, len(cuboids))
	for i, c := range cuboids {
		b := append([]int(nil), c...)
		sort.Ints(b)
		boxes[i] = b
	}
	sort.Slice(boxes, func(a, b int) bool {
		if boxes[a][0] != boxes[b][0] {
			return boxes[a][0] < boxes[b][0]
		}
		if boxes[a][1] != boxes[b][1] {
			return boxes[a][1] < boxes[b][1]
		}
		return boxes[a][2] < boxes[b][2]
	})
	n := len(boxes)
	dp := make([]int, n)
	best := 0
	for i := 0; i < n; i++ {
		dp[i] = boxes[i][2]
		for j := 0; j < i; j++ {
			if boxes[j][0] <= boxes[i][0] && boxes[j][1] <= boxes[i][1] && boxes[j][2] <= boxes[i][2] {
				if dp[j]+boxes[i][2] > dp[i] {
					dp[i] = dp[j] + boxes[i][2]
				}
			}
		}
		if dp[i] > best {
			best = dp[i]
		}
	}
	return best
}
