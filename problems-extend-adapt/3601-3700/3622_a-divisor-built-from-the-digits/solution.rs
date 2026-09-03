impl Solution {
    pub fn divisible_by_digit_totals(n: i32) -> bool {
        let mut total = 0i32;
        let mut product = 1i32;
        let mut rest = n;
        while rest > 0 {
            let digit = rest % 10;
            total += digit;
            product *= digit;
            rest /= 10;
        }
        // Digit sum >= 1 always, so the divisor never hits zero.
        n % (total + product) == 0
    }
}
