import "sort"

func countTheNumOfKFreeSubsets(nums []int, k int) int64 {
	sorted := append([]int(nil), nums...)
	sort.Ints(sorted)
	groupOf := make(map[int]int)
	lengths := []int64{}
	for _, x := range sorted {
		if gid, ok := groupOf[x-k]; ok {
			groupOf[x] = gid
			lengths[gid]++
		} else {
			groupOf[x] = len(lengths)
			lengths = append(lengths, 1)
		}
	}
	ans := int64(1)
	for _, length := range lengths {
		a, b := int64(1), int64(1)
		for t := int64(0); t < length; t++ {
			a, b = b, a+b
		}
		ans *= b
	}
	return ans
}
