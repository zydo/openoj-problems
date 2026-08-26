import (
	"sort"
)

func visibleMountains(peaks [][]int) int {
	// (u, v) = (x - y, x + y): mountain b hides peak a iff
	// u_b <= u_a and v_b >= v_a. Sort by u ascending, v descending,
	// then a peak is visible iff its v beats every earlier one strictly.
	type point struct {
		u int
		v int
	}
	points := make([]point, 0, len(peaks))
	for _, p := range peaks {
		points = append(points, point{p[0] - p[1], p[0] + p[1]})
	}
	sort.Slice(points, func(i, j int) bool {
		if points[i].u != points[j].u {
			return points[i].u < points[j].u
		}
		// equal u: larger (negated) v first
		return points[i].v > points[j].v
	})
	count := 0
	bestSeen := false
	best := 0
	for i := 0; i < len(points); {
		j := i + 1
		for j < len(points) && points[j] == points[i] {
			j++
		}
		if j-i == 1 && (!bestSeen || points[i].v > best) {
			count++
		}
		if !bestSeen || points[i].v > best {
			best = points[i].v
			bestSeen = true
		}
		i = j
	}
	return count
}
