impl Solution {
    pub fn pair_sum_in_order(nums: Vec<i32>, target: i32) -> Vec<i32> {
        let n = nums.len();
        for i in 0..n - 1 {
            let complement = target - nums[i];
            // The sorted remainder nums[i+1..] is the only legal partner
            // range: a position cannot pair with itself.
            let (mut lo, mut hi) = (i + 1, n - 1);
            while lo <= hi {
                let mid = lo + (hi - lo) / 2;
                if nums[mid] == complement {
                    // 1-based indices, smaller position first.
                    return vec![i as i32 + 1, mid as i32 + 1];
                } else if nums[mid] < complement {
                    lo = mid + 1;
                } else {
                    hi = mid - 1;
                }
            }
        }
        // Unreachable under the uniqueness promise; keeps the function total.
        Vec::new()
    }
}
