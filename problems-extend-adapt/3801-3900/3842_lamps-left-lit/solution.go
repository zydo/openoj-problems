// Toggle a fixed table indexed by lamp number; a lamp ends on exactly when
// it is toggled an odd number of times. Sweep indices 1..100 and collect
// the on positions — ascending order for free.
func lampsStillLit(lamps []int) []int {
	on := make([]bool, 101)
	for _, value := range lamps {
		on[value] = !on[value]
	}
	result := make([]int, 0, 100)
	for i := 1; i <= 100; i++ {
		if on[i] {
			result = append(result, i)
		}
	}
	return result
}
