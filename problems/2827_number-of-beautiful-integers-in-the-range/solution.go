import "fmt"

func numberOfBeautifulIntegers(low int, high int, k int) int {
	return int(countUpTo2827(int64(high), k) - countUpTo2827(int64(low-1), k))
}

func countUpTo2827(n int64, k int) int64 {
	if n <= 0 {
		return 0
	}
	str := []byte(fmt.Sprintf("%d", n))
	length := len(str)
	digits := make([]int, length)
	for i := 0; i < length; i++ {
		digits[i] = int(str[i] - '0')
	}
	memo := make([]int64, 11*2*2*21*k)
	for i := range memo {
		memo[i] = -1
	}
	var dp func(pos, tight, started, balance, mod int) int64
	dp = func(pos, tight, started, balance, mod int) int64 {
		if pos == length {
			if started == 1 && balance == 0 && mod == 0 {
				return 1
			}
			return 0
		}
		key := ((pos*2+tight)*2+started)*21*k + (balance+10)*k + mod
		if memo[key] >= 0 {
			return memo[key]
		}
		limit := 9
		if tight == 1 {
			limit = digits[pos]
		}
		var total int64
		for d := 0; d <= limit; d++ {
			nextTight := 0
			if tight == 1 && d == limit {
				nextTight = 1
			}
			if started == 0 && d == 0 {
				total += dp(pos+1, nextTight, 0, balance, (mod*10+d)%k)
			} else {
				newBalance := balance - 1
				if d%2 == 1 {
					newBalance = balance + 1
				}
				total += dp(pos+1, nextTight, 1, newBalance, (mod*10+d)%k)
			}
		}
		memo[key] = total
		return total
	}
	return dp(0, 1, 0, 0, 0)
}
