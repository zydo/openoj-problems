import "sort"

// The single negative person is the only sink; each positive person is a
// source whose units cost their circular distance to the sink, so the
// cheapest sources are drained first.
func minMoves(balance []int) int64 {
	neg := -1
	for i, v := range balance {
		if v < 0 {
			neg = i
			break
		}
	}
	if neg == -1 {
		return 0
	}
	var total int64
	for _, v := range balance {
		total += int64(v)
	}
	if total < 0 {
		return -1
	}
	n := len(balance)
	need := -int64(balance[neg])
	type source struct {
		dist  int
		value int
	}
	sources := make([]source, 0, n)
	for i, v := range balance {
		if i != neg && v > 0 {
			diff := i - neg
			if diff < 0 {
				diff = -diff
			}
			sources = append(sources, source{min(diff, n-diff), v})
		}
	}
	sort.Slice(sources, func(a, b int) bool { return sources[a].dist < sources[b].dist })
	var moves int64
	for _, src := range sources {
		if need == 0 {
			break
		}
		take := int64(src.value)
		if need < take {
			take = need
		}
		moves += take * int64(src.dist)
		need -= take
	}
	return moves
}
