import "sort"

func smallestDistancePair(nums []int, k int) int {
	nums = append([]int{}, nums...)
	sort.Ints(nums)
	n := len(nums)

	countLe := func(dist int) int {
		cnt := 0
		j := 0
		for i := 0; i < n; i++ {
			for j < n && nums[j]-nums[i] <= dist {
				j++
			}
			cnt += j - i - 1
		}
		return cnt
	}

	lo, hi := 0, nums[n-1]-nums[0]
	for lo < hi {
		mid := lo + (hi-lo)/2
		if countLe(mid) >= k {
			hi = mid
		} else {
			lo = mid + 1
		}
	}
	return lo
}
