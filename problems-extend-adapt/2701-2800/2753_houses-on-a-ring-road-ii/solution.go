package main

type Solution struct{}

func (solution *Solution) houseCount(ring *Ring, k int) int {
	// Anchor on an open door first; it becomes the round's beacon.
	for !ring.IsDoorOpen() {
		ring.MoveRight()
	}
	for {
		// Walk right until an open door is sighted. The round-start
		// beacon itself sits at forward distance n <= k, so the walk
		// always sights something within k steps.
		steps := 0
		for steps < k {
			ring.MoveRight()
			steps++
			if ring.IsDoorOpen() {
				break
			}
		}
		// Close the sighted door, then sweep up to k houses hunting for
		// a survivor. An empty sweep proves every door is now closed —
		// possible only when the door just closed was the round-start
		// beacon itself, i.e. the sighting completed a full lap and
		// steps == n.
		ring.CloseDoor()
		swept := 0
		survivor := false
		for swept < k {
			ring.MoveRight()
			swept++
			if ring.IsDoorOpen() {
				survivor = true
				break
			}
		}
		if !survivor {
			return steps
		}
	}
}
