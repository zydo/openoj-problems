func minimumSupplyStops(destination int, initialRange int, supplies [][]int) int {
	fuel := int64(initialRange)
	available := make([]int, 0, len(supplies)) // fuels at supplies already passed
	stops := 0
	i := 0
	n := len(supplies)
	for {
		if fuel >= int64(destination) {
			return stops
		}
		for i < n && int64(supplies[i][0]) <= fuel {
			available = append(available, supplies[i][1])
			i++
		}
		if len(available) == 0 {
			return -1
		}
		// Take the largest available fuel.
		best := 0
		for j := 1; j < len(available); j++ {
			if available[j] > available[best] {
				best = j
			}
		}
		fuel += int64(available[best])
		available[best] = available[len(available)-1]
		available = available[:len(available)-1]
		stops++
	}
}
