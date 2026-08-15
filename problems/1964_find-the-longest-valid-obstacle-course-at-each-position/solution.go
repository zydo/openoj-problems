import "sort"

func longestObstacleCourseAtEachPosition(obstacles []int) []int {
	tails := make([]int, 0, len(obstacles))
	ans := make([]int, 0, len(obstacles))
	for _, x := range obstacles {
		i := sort.Search(len(tails), func(i int) bool { return tails[i] > x })
		if i == len(tails) {
			tails = append(tails, x)
		} else {
			tails[i] = x
		}
		ans = append(ans, i+1)
	}
	return ans
}
