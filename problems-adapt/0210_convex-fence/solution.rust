impl Solution {
    pub fn fence_points(posts: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        fn cross(o: (i64, i64), a: (i64, i64), b: (i64, i64)) -> i64 {
            (a.0 - o.0) * (b.1 - o.1) - (a.1 - o.1) * (b.0 - o.0)
        }
        fn to_vec(ps: &[(i64, i64)]) -> Vec<Vec<i32>> {
            ps.iter().map(|&p| vec![p.0 as i32, p.1 as i32]).collect()
        }

        let mut posts: Vec<(i64, i64)> = posts.iter().map(|t| (t[0] as i64, t[1] as i64)).collect();
        posts.sort();
        posts.dedup();
        if posts.len() <= 1 {
            return to_vec(&posts);
        }

        // Strict convex hull vertices (cross <= 0 pops collinear interior posts).
        let mut lower: Vec<(i64, i64)> = Vec::new();
        for &p in &posts {
            while lower.len() >= 2 && cross(lower[lower.len() - 2], lower[lower.len() - 1], p) <= 0 {
                lower.pop();
            }
            lower.push(p);
        }
        let mut upper: Vec<(i64, i64)> = Vec::new();
        for &p in posts.iter().rev() {
            while upper.len() >= 2 && cross(upper[upper.len() - 2], upper[upper.len() - 1], p) <= 0 {
                upper.pop();
            }
            upper.push(p);
        }
        let mut hull: Vec<(i64, i64)> = Vec::new();
        hull.extend_from_slice(&lower[..lower.len() - 1]);
        hull.extend_from_slice(&upper[..upper.len() - 1]);

        let mut result: Vec<(i64, i64)> = hull.clone();
        let n = hull.len();
        if n < 2 {
            return to_vec(&posts);
        }

        let mut in_result: std::collections::HashSet<(i64, i64)> = hull.iter().copied().collect();
        // Add collinear posts lying on hull edges (boundary posts not at vertices).
        for i in 0..n {
            let a = hull[i];
            let b = hull[(i + 1) % n];
            for &p in &posts {
                if in_result.contains(&p) {
                    continue;
                }
                if cross(a, b, p) == 0
                    && a.0.min(b.0) <= p.0
                    && p.0 <= a.0.max(b.0)
                    && a.1.min(b.1) <= p.1
                    && p.1 <= a.1.max(b.1)
                {
                    result.push(p);
                    in_result.insert(p);
                }
            }
        }
        to_vec(&result)
    }
}
