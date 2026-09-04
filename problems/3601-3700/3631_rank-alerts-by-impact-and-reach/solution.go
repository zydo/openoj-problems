import "sort"

// One sort with the composite key (descending score, ascending ID). IDs
// are unique, so the order is total and deterministic. The score
// 2*sev + exp reaches 3e9, past 32-bit range, so the key is int64.
func rankAlerts(alerts [][]int) [][]int {
	sort.Slice(alerts, func(i, j int) bool {
		scoreI := 2*int64(alerts[i][1]) + int64(alerts[i][2])
		scoreJ := 2*int64(alerts[j][1]) + int64(alerts[j][2])
		if scoreI != scoreJ {
			return scoreI > scoreJ
		}
		return alerts[i][0] < alerts[j][0]
	})
	return alerts
}
