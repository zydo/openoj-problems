impl Solution {
    // Flipping one bit of any element toggles exactly that bit of the
    // array-wide XOR, so one operation changes the XOR's Hamming distance
    // to k by exactly one: fold nums into a single XOR and count the bits
    // where it differs from k.
    pub fn min_flips_to_match_xor(nums: Vec<i32>, k: i32) -> i32 {
        let mut xor_all = 0;
        for &v in &nums {
            xor_all ^= v;
        }
        (xor_all ^ k).count_ones() as i32
    }
}
