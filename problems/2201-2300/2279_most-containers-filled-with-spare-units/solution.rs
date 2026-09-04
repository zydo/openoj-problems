impl Solution {
    pub fn most_filled_containers(capacity: Vec<i32>, contents: Vec<i32>, spare: i32) -> i32 {
        let mut needs: Vec<i64> = capacity
            .iter()
            .zip(contents.iter())
            .map(|(&c, &r)| c as i64 - r as i64)
            .collect();
        needs.sort_unstable();
        let mut remaining = spare as i64;
        let mut full = 0;
        for need in needs {
            if need > remaining {
                break;
            }
            remaining -= need;
            full += 1;
        }
        full
    }
}
