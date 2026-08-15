import "sort"

func jobScheduling(startTime []int, endTime []int, profit []int) int {
	n := len(startTime)
	type job struct {
		end, start, p int
	}
	jobs := make([]job, n)
	for i := 0; i < n; i++ {
		jobs[i] = job{endTime[i], startTime[i], profit[i]}
	}
	sort.Slice(jobs, func(a, b int) bool {
		if jobs[a].end != jobs[b].end {
			return jobs[a].end < jobs[b].end
		}
		if jobs[a].start != jobs[b].start {
			return jobs[a].start < jobs[b].start
		}
		return jobs[a].p < jobs[b].p
	})
	ends := make([]int, n)
	for i := 0; i < n; i++ {
		ends[i] = jobs[i].end
	}

	best := make([]int64, n+1)
	for i := 1; i <= n; i++ {
		j := sort.Search(i-1, func(m int) bool { return ends[m] > jobs[i-1].start })
		cand := best[j] + int64(jobs[i-1].p)
		if cand > best[i-1] {
			best[i] = cand
		} else {
			best[i] = best[i-1]
		}
	}
	return int(best[n])
}
