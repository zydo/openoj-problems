impl Solution {
    pub fn house_count(ring: &mut Ring, k: i32) -> i32 {
        // Anchor on an open door first; it becomes the round's beacon.
        while !ring.is_door_open() {
            ring.move_right();
        }
        loop {
            // Walk right until an open door is sighted. The round-start
            // beacon itself sits at forward distance n <= k, so the walk
            // always sights something within k steps.
            let mut steps = 0;
            while steps < k {
                ring.move_right();
                steps += 1;
                if ring.is_door_open() {
                    break;
                }
            }
            // Close the sighted door, then sweep up to k houses hunting
            // for a survivor. An empty sweep proves every door is now
            // closed — possible only when the door just closed was the
            // round-start beacon itself, i.e. the sighting completed a
            // full lap and steps == n.
            ring.close_door();
            let mut swept = 0;
            let mut survivor = false;
            while swept < k {
                ring.move_right();
                swept += 1;
                if ring.is_door_open() {
                    survivor = true;
                    break;
                }
            }
            if !survivor {
                return steps;
            }
        }
    }
}
