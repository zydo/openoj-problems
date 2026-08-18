import "sort"

func fencePoints(posts [][]int) [][]int {
	sorted := make([][]int, len(posts))
	copy(sorted, posts)
	sort.Slice(sorted, func(i, j int) bool {
		if sorted[i][0] != sorted[j][0] {
			return sorted[i][0] < sorted[j][0]
		}
		return sorted[i][1] < sorted[j][1]
	})
	unique := [][]int{}
	for _, p := range sorted {
		if len(unique) > 0 {
			last := unique[len(unique)-1]
			if last[0] == p[0] && last[1] == p[1] {
				continue
			}
		}
		unique = append(unique, p)
	}
	if len(unique) <= 1 {
		out := make([][]int, len(unique))
		for i, p := range unique {
			out[i] = []int{p[0], p[1]}
		}
		return out
	}

	cross := func(o, a, b []int) int {
		return (a[0]-o[0])*(b[1]-o[1]) - (a[1]-o[1])*(b[0]-o[0])
	}

	// Strict convex hull vertices (cross <= 0 pops collinear interior unique).
	lower := [][]int{}
	for _, p := range unique {
		for len(lower) >= 2 && cross(lower[len(lower)-2], lower[len(lower)-1], p) <= 0 {
			lower = lower[:len(lower)-1]
		}
		lower = append(lower, p)
	}
	upper := [][]int{}
	for i := len(unique) - 1; i >= 0; i-- {
		p := unique[i]
		for len(upper) >= 2 && cross(upper[len(upper)-2], upper[len(upper)-1], p) <= 0 {
			upper = upper[:len(upper)-1]
		}
		upper = append(upper, p)
	}
	hull := append(append([][]int{}, lower[:len(lower)-1]...), upper[:len(upper)-1]...)

	result := make([][]int, 0, len(unique))
	for _, p := range hull {
		result = append(result, []int{p[0], p[1]})
	}
	n := len(hull)
	if n < 2 {
		out := make([][]int, len(unique))
		for i, p := range unique {
			out[i] = []int{p[0], p[1]}
		}
		return out
	}

	inResult := map[[2]int]bool{}
	for _, p := range hull {
		inResult[[2]int{p[0], p[1]}] = true
	}
	// Add collinear unique lying on hull edges (boundary unique not at vertices).
	for i := 0; i < n; i++ {
		a := hull[i]
		b := hull[(i+1)%n]
		for _, p := range unique {
			if inResult[[2]int{p[0], p[1]}] {
				continue
			}
			if cross(a, b, p) == 0 {
				if min(a[0], b[0]) <= p[0] && p[0] <= max(a[0], b[0]) &&
					min(a[1], b[1]) <= p[1] && p[1] <= max(a[1], b[1]) {
					result = append(result, []int{p[0], p[1]})
					inResult[[2]int{p[0], p[1]}] = true
				}
			}
		}
	}
	return result
}
