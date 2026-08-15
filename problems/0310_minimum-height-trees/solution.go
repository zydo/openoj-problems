import "sort"

func findMinHeightTrees(n int, edges [][]int) []int {
	if n <= 2 {
		r := make([]int, n)
		for i := range r {
			r[i] = i
		}
		return r
	}
	adjacency := make([][]int, n)
	degree := make([]int, n)
	for _, e := range edges {
		a, b := e[0], e[1]
		adjacency[a] = append(adjacency[a], b)
		adjacency[b] = append(adjacency[b], a)
		degree[a]++
		degree[b]++
	}
	leaves := []int{}
	for i := 0; i < n; i++ {
		if degree[i] == 1 {
			leaves = append(leaves, i)
		}
	}
	remaining := n
	for remaining > 2 {
		next := []int{}
		for _, leaf := range leaves {
			remaining--
			for _, neighbor := range adjacency[leaf] {
				degree[neighbor]--
				if degree[neighbor] == 1 {
					next = append(next, neighbor)
				}
			}
		}
		leaves = next
	}
	sort.Ints(leaves)
	return leaves
}
