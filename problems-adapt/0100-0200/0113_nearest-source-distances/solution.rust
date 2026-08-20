use std::collections::VecDeque;

impl Solution {
    pub fn nearest_source_distances(mut grid: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        let m = grid.len();
        let n = grid[0].len();
        const INF: i32 = 2147483647;
        // Invert the search: enqueue every source cell at once and run one BFS
        // outward, rather than searching from each open cell.
        let mut queue: VecDeque<(usize, usize)> = VecDeque::new();
        for r in 0..m {
            for c in 0..n {
                if grid[r][c] == 0 {
                    queue.push_back((r, c));
                }
            }
        }
        let dirs = [(1i32, 0i32), (-1, 0), (0, 1), (0, -1)];
        let mut dist: i32 = 0;
        while !queue.is_empty() {
            // Expand one whole layer per step: every distance-d cell is
            // found before any d+1 cell is labeled, which is what keeps
            // distances minimal (first reach = shortest path from a source).
            dist += 1;
            for _ in 0..queue.len() {
                let (r, c) = queue.pop_front().unwrap();
                for (dr, dc) in dirs {
                    let nr = r as i32 + dr;
                    let nc = c as i32 + dc;
                    if nr >= 0 && (nr as usize) < m && nc >= 0 && (nc as usize) < n {
                        let (ur, uc) = (nr as usize, nc as usize);
                        // Still INF means unvisited; writing the distance
                        // doubles as the visited mark, and sources and blocked
                        // cells never match INF so they are never entered.
                        if grid[ur][uc] == INF {
                            grid[ur][uc] = dist;
                            queue.push_back((ur, uc));
                        }
                    }
                }
            }
        }
        grid
    }
}
