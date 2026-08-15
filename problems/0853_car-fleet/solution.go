import "sort"

func carFleet(target int, position []int, speed []int) int {
	type car struct {
		pos, spd int
	}
	cars := make([]car, len(position))
	for i := range position {
		cars[i] = car{position[i], speed[i]}
	}
	sort.Slice(cars, func(a, b int) bool {
		if cars[a].pos != cars[b].pos {
			return cars[a].pos > cars[b].pos
		}
		return cars[a].spd > cars[b].spd
	})
	fleets := 0
	lastTime := 0.0
	for _, c := range cars {
		t := float64(target-c.pos) / float64(c.spd)
		if t > lastTime {
			fleets++
			lastTime = t
		}
	}
	return fleets
}
