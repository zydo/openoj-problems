func findTheWinner(n int, k int) int {
	friends := make([]int, n)
	for i := 0; i < n; i++ {
		friends[i] = i + 1
	}
	idx := 0
	for len(friends) > 1 {
		idx = (idx + k - 1) % len(friends)
		friends = append(friends[:idx], friends[idx+1:]...)
	}
	return friends[0]
}
