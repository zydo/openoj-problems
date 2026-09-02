import "math/bits"

func fewestToggles(start int, goal int) int {
	return bits.OnesCount(uint(start ^ goal))
}
