import "sort"

func maxPerformance(n int, speed []int, efficiency []int, k int) int {
	const MOD = 1000000007
	type engineer struct {
		eff int
		spd int
	}
	engineers := make([]engineer, n)
	for i := 0; i < n; i++ {
		engineers[i] = engineer{efficiency[i], speed[i]}
	}
	sort.Slice(engineers, func(a, b int) bool {
		if engineers[a].eff != engineers[b].eff {
			return engineers[a].eff > engineers[b].eff
		}
		return engineers[a].spd > engineers[b].spd
	})
	// min-heap of chosen speeds
	heap := make([]int, 0, n)
	push := func(v int) {
		heap = append(heap, v)
		i := len(heap) - 1
		for i > 0 {
			p := (i - 1) / 2
			if heap[p] <= heap[i] {
				break
			}
			heap[p], heap[i] = heap[i], heap[p]
			i = p
		}
	}
	pop := func() int {
		top := heap[0]
		last := heap[len(heap)-1]
		heap = heap[:len(heap)-1]
		if len(heap) > 0 {
			heap[0] = last
			i := 0
			for {
				l := 2*i + 1
				r := l + 1
				small := i
				if l < len(heap) && heap[l] < heap[small] {
					small = l
				}
				if r < len(heap) && heap[r] < heap[small] {
					small = r
				}
				if small == i {
					break
				}
				heap[i], heap[small] = heap[small], heap[i]
				i = small
			}
		}
		return top
	}
	speedSum := 0
	best := 0
	for _, e := range engineers {
		push(e.spd)
		speedSum += e.spd
		if len(heap) > k {
			speedSum -= pop()
		}
		perf := speedSum * e.eff
		if perf > best {
			best = perf
		}
	}
	return best % MOD
}
