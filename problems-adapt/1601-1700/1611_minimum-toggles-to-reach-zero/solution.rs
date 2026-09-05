impl Solution {
    pub fn steps_to_zero(n: i32) -> i32 {
        // The two operations exactly step through the reflected binary Gray
        // code sequence, so the answer is n's position in that ordering:
        // the binary count that Gray-encodes into n. Recovering it is the
        // standard inverse Gray-code transform, a cascading XOR downshift.
        let mut n = n;
        let mut ans = 0;
        while n != 0 {
            ans ^= n;
            n >>= 1;
        }
        ans
    }
}
