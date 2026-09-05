import (
	"sort"
)

func mostFilledContainers(capacity []int, contents []int, spare int) int {
	needs := make([]int64, len(capacity))
	for i := range capacity {
		needs[i] = int64(capacity[i]) - int64(contents[i])
	}
	sort.Slice(needs, func(i, j int) bool { return needs[i] < needs[j] })
	remaining := int64(spare)
	full := 0
	for _, need := range needs {
		if need > remaining {
			break
		}
		remaining -= need
		full++
	}
	return full
}
