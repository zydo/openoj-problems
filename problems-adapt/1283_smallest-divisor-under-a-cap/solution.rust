impl Solution {
    pub fn smallest_divisor_under_cap(nums: Vec<i32>, cap: i32) -> i32 {
        // (x + d - 1) / d is the float-free ceiling of x / d.
        let total = |divisor: i64| -> i64 {
            let mut sum = 0i64;
            for &x in &nums {
                sum += (x as i64 + divisor - 1) / divisor;
            }
            sum
        };
        // The ceiled sum is non-increasing in the divisor, so "sum <=
        // cap" is monotone: lower-bound search for the smallest valid d.
        // Past max(nums) every term is already 1, capping the range.
        let mut hi = nums.iter().copied().max().unwrap() as i64;
        let mut lo = 1i64;
        while lo < hi {
            let mid = lo + (hi - lo) / 2;
            if total(mid) <= cap as i64 {
                hi = mid;
            } else {
                lo = mid + 1;
            }
        }
        lo as i32
    }
}
