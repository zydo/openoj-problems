impl Solution {
    pub fn fewest_swaps_for_rising_rows(top: Vec<i32>, bottom: Vec<i32>) -> i32 {
        const INF: i32 = i32::MAX / 2;
        let n = top.len();
        // Only two configurations matter per index — pair kept or
        // swapped — and swap starts at 1: swapping index 0 costs one op.
        let (mut keep, mut swap) = (0i32, 1i32);
        for i in 1..n {
            let (mut nkeep, mut nswap) = (INF, INF);
            let (a1, b1) = (top[i - 1], bottom[i - 1]);
            let (a2, b2) = (top[i], bottom[i]);
            // Natural ordering licenses consistent choices: keep
            // follows keep, swap follows swap (paying one more op).
            if a1 < a2 && b1 < b2 {
                nkeep = nkeep.min(keep);
                nswap = nswap.min(swap + 1);
            }
            // Crossed ordering licenses flipping the choice at i
            // relative to i-1.
            if a1 < b2 && b1 < a2 {
                nkeep = nkeep.min(swap);
                nswap = nswap.min(keep + 1);
            }
            // Both conditions may hold; solvability guarantees one does.
            keep = nkeep;
            swap = nswap;
        }
        keep.min(swap)
    }
}
