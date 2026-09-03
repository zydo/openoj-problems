impl Solution {
    pub fn flip_opening_stretch(s: String, k: i32) -> String {
        // Mutable buffer; two pointers close on the middle of the prefix.
        // Lowercase ASCII guarantees bytes and characters coincide.
        let k = k as usize;
        let mut chars = s.into_bytes();
        let (mut left, mut right) = (0, k - 1);
        while left < right {
            chars.swap(left, right);
            left += 1;
            right -= 1;
        }
        String::from_utf8(chars).unwrap()
    }
}
