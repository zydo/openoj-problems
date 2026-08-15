import "strconv"

func longestCommonPrefix(arr1 []int, arr2 []int) int {
	prefixes := make(map[int]struct{})
	for _, x := range arr1 {
		v := 0
		for _, c := range strconv.Itoa(x) {
			v = v*10 + int(c-'0')
			prefixes[v] = struct{}{}
		}
	}
	best := 0
	for _, y := range arr2 {
		v := 0
		length := 0
		for _, c := range strconv.Itoa(y) {
			v = v*10 + int(c-'0')
			length++
			if _, ok := prefixes[v]; ok {
				if length > best {
					best = length
				}
			} else {
				break
			}
		}
	}
	return best
}
