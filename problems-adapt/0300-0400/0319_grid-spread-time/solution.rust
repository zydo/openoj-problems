use std::collections::VecDeque;

impl Solution {
    pub fn grid_spread_time(grid: Vec<Vec<i32>>) -> i32 {
        let rows = grid.len();
        let cols = grid[0].len();
        let mut g = grid;
        let mut queue: VecDeque<(usize, usize, i32)> = VecDeque::new();
        let mut pending = 0i64;
        // Multi-source BFS: every active cell starts at t = 0; the answer
        // is the time the last pending cell activates. Count pending cells so
        // walled-off stragglers can be detected at the end.
        for r in 0..rows {
            for c in 0..cols {
                if g[r][c] == 2 {
                    queue.push_back((r, c, 0));
                } else if g[r][c] == 1 {
                    pending += 1;
                }
            }
        }
        let mut rounds = 0;
        let dr = [1i64, -1, 0, 0];
        let dc = [0i64, 0, 1, -1];
        while let Some((r, c, t)) = queue.pop_front() {
            // Tracking the max activation time spares per-round batching.
            if t > rounds {
                rounds = t;
            }
            for d in 0..4 {
                let nr = r as i64 + dr[d];
                let nc = c as i64 + dc[d];
                if nr >= 0 && nr < rows as i64 && nc >= 0 && nc < cols as i64 {
                    let (nr, nc) = (nr as usize, nc as usize);
                    if g[nr][nc] == 1 {
                        // Flip to active on enqueue: each cell queues at
                        // most once and `pending` stays in sync with the grid.
                        g[nr][nc] = 2;
                        pending -= 1;
                        queue.push_back((nr, nc, t + 1));
                    }
                }
            }
        }
        if pending == 0 {
            rounds
        } else {
            -1
        }
    }
}
