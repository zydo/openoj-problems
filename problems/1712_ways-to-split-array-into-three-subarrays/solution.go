func waysToSplit(nums []int) int {
	const MOD = 1000000007
	n := len(nums)
	prefix := make([]int64, n+1)
	for i, value := range nums {
		prefix[i+1] = prefix[i] + int64(value)
	}
	total := prefix[n]
	var answer int64
	for i := 1; i < n-1; i++ {
		left := prefix[i]
		lo := lowerBound1712(prefix, i+1, n, 2*left)
		if lo >= n {
			continue
		}
		hi := upperBound1712(prefix, lo, n, (total+left)/2)
		if hi > lo {
			answer = (answer + int64(hi-lo)) % MOD
		}
	}
	return int(answer)
}

func lowerBound1712(a []int64, lo, hi int, value int64) int {
	for lo < hi {
		mid := lo + (hi-lo)/2
		if a[mid] < value {
			lo = mid + 1
		} else {
			hi = mid
		}
	}
	return lo
}

func upperBound1712(a []int64, lo, hi int, value int64) int {
	for lo < hi {
		mid := lo + (hi-lo)/2
		if a[mid] <= value {
			lo = mid + 1
		} else {
			hi = mid
		}
	}
	return lo
}
