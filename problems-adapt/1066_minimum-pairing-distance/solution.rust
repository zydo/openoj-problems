impl Solution {
    pub fn minimum_pairing_distance(points: Vec<Vec<i32>>, anchors: Vec<Vec<i32>>) -> i32 {
        let n = points.len();
        let m = anchors.len();
        let mut dist = vec![vec![0i32; m]; n];
        for i in 0..n {
            for b in 0..m {
                dist[i][b] = (points[i][0] - anchors[b][0]).abs() + (points[i][1] - anchors[b][1]).abs();
            }
        }
        let size = 1usize << m;
        let inf = i32::MAX;
        let mut dp = vec![inf; size];
        dp[0] = 0;
        let mut best = inf;
        for mask in 0..size {
            if dp[mask] == inf {
                continue;
            }
            let assigned = mask.count_ones() as usize;
            if assigned == n {
                if dp[mask] < best {
                    best = dp[mask];
                }
                continue;
            }
            for b in 0..m {
                if mask >> b & 1 == 0 {
                    let candidate = dp[mask] + dist[assigned][b];
                    let next = mask | (1 << b);
                    if candidate < dp[next] {
                        dp[next] = candidate;
                    }
                }
            }
        }
        best
    }
}
