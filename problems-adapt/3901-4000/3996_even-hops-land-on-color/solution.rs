impl Solution {
    pub fn even_hop_reachable(start: Vec<i32>, target: Vec<i32>) -> bool {
        (start[0] + start[1]) % 2 == (target[0] + target[1]) % 2
    }
}
