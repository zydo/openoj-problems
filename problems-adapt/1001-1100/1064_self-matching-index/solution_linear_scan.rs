impl Solution {
    pub fn self_match_index(arr: Vec<i32>) -> i32 {
        for i in 0..arr.len() {
            if arr[i] == i as i32 {
                return i as i32;
            }
        }
        -1
    }
}
