impl Solution {
    pub fn top_digit_pair_product(n: i32) -> i32 {
        // All digits are >= 0, so the best pair product is the product of
        // the two largest digits; sorting the (at most 10) digits and
        // taking the top two answers every case, repeated digits included.
        let mut digits: Vec<i32> = n.to_string().chars().map(|d| d as i32 - '0' as i32).collect();
        digits.sort_unstable();
        let len = digits.len();
        digits[len - 1] * digits[len - 2]
    }
}
