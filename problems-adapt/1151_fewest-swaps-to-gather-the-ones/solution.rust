impl Solution {
    pub fn fewest_swaps_to_gather_ones(bits: Vec<i32>) -> i32 {
        // the grouped block must hold every 1, so its length is fixed at ones
        let ones: usize = bits.iter().map(|&v| v as usize).sum();
        if ones <= 1 {
            // zero or a single 1 (or all zeros) is trivially grouped
            return 0;
        }
        // zeros in the first window: each zero inside costs exactly one swap
        let mut zeros = 0;
        for i in 0..ones {
            if bits[i] == 0 {
                zeros += 1;
            }
        }
        let mut best = zeros;
        for i in ones..bits.len() {
            // slide by one: entering element adds its zero-ness, leaving
            // element drops its, so the tally stays exact without rescanning
            zeros += (1 - bits[i] as i32) - (1 - bits[i - ones] as i32);
            if zeros < best {
                best = zeros;
            }
        }
        best
    }
}
