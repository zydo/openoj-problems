impl Solution {
    pub fn weighted_digit_tally(mut n: i32) -> i32 {
        let mut answer = 0;
        while n > 0 {
            answer += n % 10;
            n /= 10;
        }
        answer
    }
}
