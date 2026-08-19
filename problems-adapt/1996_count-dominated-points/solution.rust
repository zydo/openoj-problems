impl Solution {
    pub fn count_dominated_points(points: Vec<Vec<i32>>) -> i32 {
        // x descending; y ASCENDING within equal x so that
        // equal-x points (which can never dominate each other) only
        // ever meet a running max from strictly larger-x groups.
        let mut props = points;
        props.sort_by(|a, b| b[0].cmp(&a[0]).then(a[1].cmp(&b[1])));
        let mut dominated = 0;
        // Every earlier point has x >= the current one's, so the
        // current one is dominated exactly when some seen y is strictly
        // greater -- one running maximum is enough.
        let mut max_y = 0;
        for p in &props {
            if p[1] < max_y {
                dominated += 1;
            } else {
                // Raise the max only when not dominated, so later (smaller-x)
                // groups compare against it.
                max_y = p[1];
            }
        }
        dominated
    }
}
