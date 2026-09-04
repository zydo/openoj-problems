impl Solution {
    pub fn is_digit_power_sum(n: i32) -> bool {
        let digits = n.to_string().len() as u32;
        let mut total: i64 = 0;
        let mut remaining = n;
        while remaining > 0 {
            let digit = (remaining % 10) as i64;
            total += digit.pow(digits);
            remaining /= 10;
        }
        total == n as i64
    }
}
