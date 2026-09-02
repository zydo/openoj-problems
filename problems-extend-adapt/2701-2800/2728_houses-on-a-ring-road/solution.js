class Solution {
    houseCount(ring, k) {
        // Sweep k consecutive houses, closing each door as we pass.
        // Since n <= k, that arc covers the whole circle, so every door
        // — whatever its initial state — ends closed.
        for (let i = 0; i < k; i++) {
            ring.closeDoor();
            ring.moveRight();
        }
        // Reopen the house we stand on: it is now the ring's ONLY
        // open door, a marker recognizable from anywhere on the circle.
        ring.openDoor();
        // Walk right until the marker is re-sighted. The houses stepped
        // over before returning to it count the circumference exactly.
        let count = 1;
        ring.moveRight();
        while (!ring.isDoorOpen()) {
            count++;
            ring.moveRight();
        }
        return count;
    }
}
