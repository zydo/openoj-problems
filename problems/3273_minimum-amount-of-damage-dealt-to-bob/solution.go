import "sort"

func minDamage(power int, damage []int, health []int) int64 {
	n := len(damage)
	times := make([]int, n)
	ratio := make([]float64, n)
	order := make([]int, n)
	remaining := int64(0)
	for i := 0; i < n; i++ {
		order[i] = i
		times[i] = (health[i] + power - 1) / power
		ratio[i] = float64(damage[i]) / float64(times[i])
		remaining += int64(damage[i])
	}
	sort.SliceStable(order, func(a, b int) bool {
		return ratio[order[a]] > ratio[order[b]]
	})
	var answer int64
	for _, i := range order {
		answer += remaining * int64(times[i])
		remaining -= int64(damage[i])
	}
	return answer
}
