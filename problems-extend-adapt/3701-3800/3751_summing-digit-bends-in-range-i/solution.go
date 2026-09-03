import "fmt"

func totalBends(num1 int, num2 int) int {
	// Bends of one number: an interior digit is a peak when it is
	// strictly greater than both neighbors and a valley when it is
	// strictly less than both; equal neighbors never count.
	bends := func(n int) int {
		if n < 100 {
			return 0
		}
		prev := n % 10 // least significant digit so far
		n /= 10
		cur := n % 10
		n /= 10
		w := 0
		for {
			nxt := n % 10
			if (cur > prev && cur > nxt) || (cur < prev && cur < nxt) {
				w++
			}
			prev, cur = cur, nxt
			n /= 10
			if n == 0 {
				break
			}
		}
		return w
	}
	// The range holds at most 10^5 numbers of at most 6 digits each,
	// so the plain enumeration the hint suggests is plenty.
	total := 0
	for x := num1; x <= num2; x++ {
		total += bends(x)
	}
	return total
}

var _ = fmt.Sprintf // silence fmt import if unused
