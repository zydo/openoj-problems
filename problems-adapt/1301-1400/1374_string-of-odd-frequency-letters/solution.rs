impl Solution {
    pub fn build_odd_count_string(n: i32) -> String {
        let n = n as usize;
        let mut out = vec![b'a'; n];
        if n % 2 == 0 {
            out[n - 1] = b'b';
        }
        String::from_utf8(out).unwrap()
    }
}
