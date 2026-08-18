impl Solution {
    pub fn minimum_start_health(grid: Vec<Vec<i32>>) -> i32 {
        let m = grid.len();
        let n = grid[0].len();
        let inf = i32::MAX / 2;
        // need[i][j]: smallest health needed when ENTERING (i, j) so some
        // right/down path reaches the far corner. An inf border keeps
        // out-of-bounds neighbors from ever being chosen.
        let mut need = vec![vec![inf; n + 1]; m + 1];
        // Seed: leaving the bottom-right room requires at least 1 health.
        need[m][n - 1] = 1;
        // Fill bottom-to-top, right-to-left so both onward values are final.
        for i in (0..m).rev() {
            for j in (0..n).rev() {
                // Take the cheaper onward room, pay this room's effect;
                // health must stay at least 1 — 0 or below is fatal.
                let best_next = need[i + 1][j].min(need[i][j + 1]);
                need[i][j] = 1.max(best_next - grid[i][j]);
            }
        }
        need[0][0]
    }
}
