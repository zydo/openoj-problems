impl Solution {
    pub fn largest_water_area(heights: Vec<i32>) -> i64 {
        // Start with the widest possible container, one pointer at each end.
        let mut left = 0usize;
        let mut right = heights.len() - 1;
        let mut best = 0i64;
        while left < right {
            // Area = width x the shorter wall: water above it would spill.
            let h = heights[left].min(heights[right]);
            let area = (right - left) as i64 * h as i64;
            if area > best {
                best = area;
            }
            // Moving the taller wall inward can never help -- the area stays
            // capped by the shorter wall while the width falls -- so the
            // shorter wall's current pair is the best it can ever be part of
            // and it is safe to discard. Ties move right, equally correct.
            if heights[left] < heights[right] {
                left += 1;
            } else {
                right -= 1;
            }
        }
        best
    }
}
