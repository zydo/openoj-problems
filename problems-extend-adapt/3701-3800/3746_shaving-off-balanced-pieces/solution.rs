impl Solution {
    pub fn balanced_shave_leftover(s: String) -> i32 {
        // Every operation deletes one 'a' together with one 'b', so the
        // difference between the two counts never changes; while both letters
        // remain some adjacent pair differs, and deleting such pairs one after
        // another boils the string down to exactly that difference.
        let count_a = s.bytes().filter(|&b| b == b'a').count();
        let count_b = s.len() - count_a;
        (count_a as i32 - count_b as i32).abs()
    }
}
