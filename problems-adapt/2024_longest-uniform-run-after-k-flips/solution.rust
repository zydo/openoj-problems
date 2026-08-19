impl Solution {
    pub fn longest_uniform_run_after_k_flips(s: String, k: i32) -> i32 {
        let bytes = s.as_bytes();
        // t/f count symbols inside the window; a window can be made uniform
        // by flipping whichever character is currently the minority.
        let (mut t, mut f) = (0i32, 0i32);
        let mut left = 0usize;
        let mut best = 0i32;
        for right in 0..bytes.len() {
            if bytes[right] == b'T' {
                t += 1;
            } else {
                f += 1;
            }
            // Valid iff the minority count fits within the k flips — the min
            // covers both choices of final majority at once. Validity is
            // monotone in window size, so shrinking from the left alone
            // restores it.
            while t.min(f) > k {
                if bytes[left] == b'T' {
                    t -= 1;
                } else {
                    f -= 1;
                }
                left += 1;
            }
            best = best.max((right - left + 1) as i32);
        }
        best
    }
}
