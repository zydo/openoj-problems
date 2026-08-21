impl Solution {
    pub fn two_probe_search(n: i32) -> i32 {
        let (mut cover, mut moves) = (0i32, 0i32);
        // cover = tallest building solvable with `moves` moves and two probes.
        while cover < n {
            moves += 1;
            // First drop goes at cover+1: m-1 floors below for the surviving probe's
            // linear scan, cover(m-1) floors above — so cover(m) = cover(m-1) + m,
            // i.e. the triangular numbers m(m+1)/2.
            cover += moves;
        }
        // Smallest move budget whose triangular coverage reaches n.
        moves
    }
}
