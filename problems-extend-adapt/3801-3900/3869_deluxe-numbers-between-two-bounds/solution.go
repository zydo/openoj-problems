import (
	"sort"
	"strconv"
)

func countDeluxe(l int64, r int64) int64 {
	// Strictly increasing numbers draw digits from 1..9; strictly decreasing
	// ones from 0..9 with no leading zero. Enumerate every nonempty digit
	// subset once per direction and deduplicate.
	set := make(map[int64]bool)
	for mask := 1; mask < (1 << 9); mask++ {
		var num int64
		for d := 1; d <= 9; d++ {
			if mask&(1<<(d-1)) != 0 {
				num = num*10 + int64(d)
			}
		}
		set[num] = true
	}
	for mask := 1; mask < (1 << 10); mask++ {
		var num int64
		for d := 9; d >= 0; d-- {
			if mask&(1<<d) != 0 {
				num = num*10 + int64(d)
			}
		}
		if num > 0 {
			set[num] = true
		}
	}
	sleeks := make([]int64, 0, len(set))
	for g := range set {
		sleeks = append(sleeks, g)
	}
	sort.Slice(sleeks, func(i, j int) bool { return sleeks[i] < sleeks[j] })

	// sleek[s] == 1 when the integer s is itself strictly monotone; those are
	// exactly the sleek digit sums (s in [1, 144]).
	sleek := make([]int, 145)
	for _, g := range sleeks {
		if g <= 144 {
			sleek[g] = 1
		}
	}

	// overlap[i]: among sleeks[0..i), how many also have a sleek digit sum
	overlap := make([]int64, len(sleeks)+1)
	for i, g := range sleeks {
		overlap[i+1] = overlap[i] + int64(sleek[digitSum(g)])
	}

	countDeluxeUpTo := func(x int64) int64 {
		// Deluxe = sleek digits OR sleek digit sum; subtract the sleeks whose
		// digit sum is also sleek (counted by both terms).
		return countSleekSum(x, sleek) + countSleek(x, sleeks) - countOverlap(x, sleeks, overlap)
	}
	return countDeluxeUpTo(r) - countDeluxeUpTo(l-1)
}

func digitSum(n int64) int {
	s := 0
	for n > 0 {
		s += int(n % 10)
		n /= 10
	}
	return s
}

func countSleek(x int64, sleeks []int64) int64 {
	lo := 0
	hi := len(sleeks)
	for lo < hi {
		mid := (lo + hi) / 2
		if sleeks[mid] <= x {
			lo = mid + 1
		} else {
			hi = mid
		}
	}
	return int64(lo)
}

func countOverlap(x int64, sleeks []int64, overlap []int64) int64 {
	return overlap[countSleek(x, sleeks)]
}

func countSleekSum(x int64, sleek []int) int64 {
	// Numbers in [1, x] whose digit sum is a sleek sum.
	if x <= 0 {
		return 0
	}
	s := strconv.FormatInt(x, 10)
	n := len(s)
	// ways[k][t]: k free digits (0-9, leading zeros allowed) summing to
	// exactly t. Counts reach ~10^15, past 32 bits, so the table is int64.
	ways := make([][]int64, n+1)
	for i := range ways {
		ways[i] = make([]int64, 145)
	}
	ways[0][0] = 1
	for k := 1; k <= n; k++ {
		for t := 0; t <= 144; t++ {
			var total int64
			for d := 0; d <= 9; d++ {
				if t >= d {
					total += ways[k-1][t-d]
				}
			}
			ways[k][t] = total
		}
	}
	var result int64
	running := 0
	for i := 0; i < n; i++ {
		v := int(s[i] - '0')
		k := n - i - 1
		// A smaller digit here fixes the prefix; the tail is free.
		for d := 0; d < v; d++ {
			base := running + d
			limit := 9 * k
			if 144-base < limit {
				limit = 144 - base
			}
			for rem := 0; rem <= limit; rem++ {
				if sleek[base+rem] == 1 {
					result += ways[k][rem]
				}
			}
		}
		running += v
	}
	if sleek[running] == 1 {
		result++
	}
	return result
}
