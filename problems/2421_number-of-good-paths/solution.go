import "sort"

func numberOfGoodPaths(vals []int, edges [][]int) int {
	n := len(vals)
	parent := make([]int, n)
	size := make([]int, n)
	for i := range parent {
		parent[i] = i
		size[i] = 1
	}
	var find func(int) int
	find = func(x int) int {
		for parent[x] != x {
			parent[x] = parent[parent[x]]
			x = parent[x]
		}
		return x
	}
	union := func(a, b int) {
		ra, rb := find(a), find(b)
		if ra == rb {
			return
		}
		if size[ra] < size[rb] {
			ra, rb = rb, ra
		}
		parent[rb] = ra
		size[ra] += size[rb]
	}

	adj := make([][]int, n)
	for _, e := range edges {
		adj[e[0]] = append(adj[e[0]], e[1])
		adj[e[1]] = append(adj[e[1]], e[0])
	}

	byValue := make(map[int][]int)
	for i, v := range vals {
		byValue[v] = append(byValue[v], i)
	}
	valueKeys := make([]int, 0, len(byValue))
	for v := range byValue {
		valueKeys = append(valueKeys, v)
	}
	sort.Ints(valueKeys)

	answer := 0
	for _, v := range valueKeys {
		nodes := byValue[v]
		for _, u := range nodes {
			for _, w := range adj[u] {
				if vals[w] <= v {
					union(u, w)
				}
			}
		}
		componentCount := make(map[int]int)
		for _, u := range nodes {
			componentCount[find(u)]++
		}
		for _, c := range componentCount {
			answer += c * (c - 1) / 2
		}
	}
	return answer + n
}
