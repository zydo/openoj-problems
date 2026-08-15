func distance(nums []int) []int64 {
	pos := make(map[int][]int)
	for i, x := range nums {
		pos[x] = append(pos[x], i)
	}
	arr := make([]int64, len(nums))
	for _, idxs := range pos {
		m := len(idxs)
		prefix := make([]int64, m+1)
		for j, i := range idxs {
			prefix[j+1] = prefix[j] + int64(i)
		}
		for j, i := range idxs {
			left := int64(i)*int64(j) - prefix[j]
			right := (prefix[m] - prefix[j+1]) - int64(i)*int64(m-1-j)
			arr[i] = left + right
		}
	}
	return arr
}
