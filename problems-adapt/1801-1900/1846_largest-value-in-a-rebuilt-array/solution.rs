impl Solution {
    // After sorting, each element can be raised to at most one more than
    // the previous; the answer is the running value min(prev + 1, v).
    pub fn largest_rebuilt_value(mut arr: Vec<i32>) -> i32 {
        arr.sort_unstable();
        let mut cur = 1;
        for &v in &arr[1..] {
            cur = (cur + 1).min(v);
        }
        cur
    }
}
