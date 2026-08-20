impl Solution {
    pub fn largest_min_gap(slots: Vec<i32>, m: i32) -> i32 {
        let slots = {
            let mut pos = slots;
            pos.sort();
            pos
        };

        let feasible = |distance: i32| -> bool {
            // Greedy: the first marker sits at the leftmost slot (count = 1),
            // then each marker takes the first slot at least `distance`
            // beyond the last placed one. Earliest-possible placement is
            // never worse, so failure here means no placement works.
            let mut count = 1;
            let mut last = slots[0];
            for i in 1..slots.len() {
                if slots[i] - last >= distance {
                    count += 1;
                    last = slots[i];
                    if count >= m {
                        // All markers placed — exit early.
                        return true;
                    }
                }
            }
            count >= m
        };

        // Feasibility is monotone in the spacing, so binary search the
        // largest feasible d over [1, span]; the upper-mid form keeps the
        // search moving when lo and hi become adjacent.
        let mut lo = 1;
        let mut hi = slots[slots.len() - 1] - slots[0];
        while lo < hi {
            let mid = lo + (hi - lo + 1) / 2;
            if feasible(mid) {
                lo = mid;
            } else {
                hi = mid - 1;
            }
        }
        lo
    }
}
