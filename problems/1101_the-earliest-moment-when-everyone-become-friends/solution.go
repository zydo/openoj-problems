import "sort"

func earliestAcq(logs [][]int, n int) int {
	sortedLogs := make([][]int, len(logs))
	copy(sortedLogs, logs)
	sort.Slice(sortedLogs, func(i, j int) bool { return sortedLogs[i][0] < sortedLogs[j][0] })
	parent := make([]int, n)
	for i := range parent {
		parent[i] = i
	}
	var find func(int) int
	find = func(a int) int {
		for parent[a] != a {
			parent[a] = parent[parent[a]]
			a = parent[a]
		}
		return a
	}
	components := n
	for _, log := range sortedLogs {
		rx, ry := find(log[1]), find(log[2])
		if rx != ry {
			parent[rx] = ry
			components--
			if components == 1 {
				return log[0]
			}
		}
	}
	return -1
}
