func getModifiedArray(length int, updates [][]int) []int {
	diff := make([]int64, length+1)
	for _, u := range updates {
		diff[u[0]] += int64(u[2])
		diff[u[1]+1] -= int64(u[2])
	}
	arr := make([]int, length)
	var cur int64
	for i := 0; i < length; i++ {
		cur += diff[i]
		arr[i] = int(cur)
	}
	return arr
}
