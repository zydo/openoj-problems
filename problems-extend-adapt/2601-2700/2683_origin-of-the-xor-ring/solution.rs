impl Solution {
    // Each original element enters exactly two derived entries (its own slot
    // and its neighbour's), so folding derived with XOR cancels every pair
    // and lands on 0 exactly when a valid original exists.
    pub fn has_binary_origin(derived: Vec<i32>) -> bool {
        let mut total = 0;
        for &value in &derived {
            total ^= value;
        }
        total == 0
    }
}
