package main

type Solution struct{}

func (solution *Solution) houseCount(ring *Ring, k int) int {
	// Sweep k consecutive houses, closing each door as we pass. Since
	// n <= k, that arc covers the whole circle, so every door —
	// whatever its initial state — ends closed.
	for i := 0; i < k; i++ {
		ring.CloseDoor()
		ring.MoveRight()
	}
	// Reopen the house we stand on: it is now the ring's ONLY open
	// door, a marker recognizable from anywhere on the circle.
	ring.OpenDoor()
	// Walk right until the marker is re-sighted. The houses stepped
	// over before returning to it count the circumference exactly.
	count := 1
	ring.MoveRight()
	for !ring.IsDoorOpen() {
		count++
		ring.MoveRight()
	}
	return count
}
