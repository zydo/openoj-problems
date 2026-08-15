import "sort"

func maxStarSum(vals []int, edges [][]int, k int) int {
	n := len(vals)
	neighbors := make([][]int, n)
	for _, edge := range edges {
		neighbors[edge[0]] = append(neighbors[edge[0]], vals[edge[1]])
		neighbors[edge[1]] = append(neighbors[edge[1]], vals[edge[0]])
	}
	best := vals[0]
	for _, v := range vals {
		if v > best {
			best = v
		}
	}
	for i := 0; i < n; i++ {
		adjacent := neighbors[i]
		sort.Sort(sort.Reverse(sort.IntSlice(adjacent)))
		total := vals[i]
		take := k
		if len(adjacent) < take {
			take = len(adjacent)
		}
		for j := 0; j < take; j++ {
			if adjacent[j] <= 0 {
				break
			}
			total += adjacent[j]
		}
		if total > best {
			best = total
		}
	}
	return best
}
