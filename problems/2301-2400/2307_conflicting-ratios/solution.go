import "math"

func hasRatioConflict(pairs [][]string, ratios []float64) bool {
	EPS := 1e-5
	id := make(map[string]int)
	parent := make([]int, len(pairs)*2)
	weight := make([]float64, len(pairs)*2)
	for i := range parent {
		parent[i] = i
		weight[i] = 1.0
	}

	getId := func(s string) int {
		if v, ok := id[s]; ok {
			return v
		}
		fresh := len(id)
		id[s] = fresh
		parent[fresh] = fresh
		weight[fresh] = 1.0
		return fresh
	}

	var find func(x int) (int, float64)
	find = func(x int) (int, float64) {
		if parent[x] == x {
			return x, 1.0
		}
		root, w := find(parent[x])
		parent[x] = root
		weight[x] *= w
		return root, weight[x]
	}

	for i := range pairs {
		a := getId(pairs[i][0])
		b := getId(pairs[i][1])
		w := ratios[i]
		rootA, wa := find(a)
		rootB, wb := find(b)
		if rootA == rootB {
			if math.Abs(wa/wb-w) > EPS {
				return true
			}
		} else {
			parent[rootA] = rootB
			weight[rootA] = wb * w / wa
		}
	}
	return false
}
