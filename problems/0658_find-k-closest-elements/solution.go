func findClosestElements(arr []int, k int, x int) []int {
	lo, hi := 0, len(arr)-k
	for lo < hi {
		mid := lo + (hi-lo)/2
		if x-arr[mid] > arr[mid+k]-x {
			lo = mid + 1
		} else {
			hi = mid
		}
	}
	result := make([]int, k)
	copy(result, arr[lo:lo+k])
	return result
}
