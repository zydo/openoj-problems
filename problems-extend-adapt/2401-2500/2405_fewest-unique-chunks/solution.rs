impl Solution {
    pub fn fewest_unique_chunks(s: String) -> i32 {
        let bytes = s.as_bytes();
        let mut count = 1;
        let mut seen: u32 = 0;
        for &b in bytes {
            let bit = 1u32 << (b - b'a');
            if seen & bit != 0 {
                count += 1;
                seen = bit;
            } else {
                seen |= bit;
            }
        }
        count
    }
}
