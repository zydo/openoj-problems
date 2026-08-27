import "sort"

// After sorting, the k smallest elements occupy the front of the array and
// the k largest the back; equal values may straddle the cut, but their
// contribution to each sum is unchanged.
func absDifference(nums []int, k int) int {
	sort.Ints(nums)
	small, large := 0, 0
	for i := 0; i < k; i++ {
		small += nums[i]
		large += nums[len(nums)-1-i]
	}
	return large - small
}
