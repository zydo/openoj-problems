func canCompleteCircuit(gas []int, cost []int) int {
	total := int64(0)
	tank := int64(0)
	start := 0
	for i := range gas {
		diff := int64(gas[i]) - int64(cost[i])
		total += diff
		tank += diff
		if tank < 0 {
			start = i + 1
			tank = 0
		}
	}
	if total >= 0 {
		return start
	}
	return -1
}
