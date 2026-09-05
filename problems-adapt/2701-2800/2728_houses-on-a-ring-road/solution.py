class Solution:
    def houseCount(self, ring: Ring, k: int) -> int:
        # Sweep k consecutive houses, closing each door as we pass.
        # Since n <= k, that arc covers the whole circle, so every door
        # — whatever its initial state — ends closed.
        for _ in range(k):
            ring.closeDoor()
            ring.moveRight()
        # Reopen the house we stand on: it is now the ring's ONLY
        # open door, a marker recognizable from anywhere on the circle.
        ring.openDoor()
        # Walk right until the marker is re-sighted. The houses stepped
        # over before returning to it count the circumference exactly.
        count = 1
        ring.moveRight()
        while not ring.isDoorOpen():
            count += 1
            ring.moveRight()
        return count
