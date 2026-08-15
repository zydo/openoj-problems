import "sort"

func medianSlidingWindow(nums []int, k int) []float64 {
	window := make([]int, 0, len(nums))
	out := make([]float64, 0, len(nums)-k+1)
	for i, x := range nums {
		pos := sort.SearchInts(window, x)
		window = append(window, 0)
		copy(window[pos+1:], window[pos:])
		window[pos] = x
		if i >= k {
			p := sort.SearchInts(window, nums[i-k])
			window = append(window[:p], window[p+1:]...)
		}
		if i >= k-1 {
			if k%2 == 1 {
				out = append(out, float64(window[k/2]))
			} else {
				out = append(out, (float64(window[k/2-1])+float64(window[k/2]))/2.0)
			}
		}
	}
	return out
}
