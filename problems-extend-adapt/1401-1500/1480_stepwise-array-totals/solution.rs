impl Solution {
    pub fn stepwise_totals(nums: Vec<i64>) -> Vec<i64> {
        let mut result = nums;
        for i in 1..result.len() {
            result[i] += result[i - 1];
        }
        result
    }
}
