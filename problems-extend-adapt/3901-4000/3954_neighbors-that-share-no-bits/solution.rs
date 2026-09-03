impl Solution {
    pub fn sum_disjoint_neighbors(n: i32, k: i32) -> i32 {
        ((n - k).max(1)..=n + k).filter(|&x| n & x == 0).sum()
    }
}
