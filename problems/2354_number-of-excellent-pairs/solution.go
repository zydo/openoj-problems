import "math/bits"

func countExcellentPairs(nums []int, k int) int64 {
	unique := make(map[int]struct{})
	for _, x := range nums {
		unique[x] = struct{}{}
	}
	var counts [64]int64
	for x := range unique {
		counts[bits.OnesCount(uint(x))]++
	}
	var answer int64
	for b1 := 0; b1 < 64; b1++ {
		if counts[b1] == 0 {
			continue
		}
		for b2 := 0; b2 < 64; b2++ {
			if b1+b2 >= k {
				answer += counts[b1] * counts[b2]
			}
		}
	}
	return answer
}
