use std::collections::BinaryHeap;

impl Solution {
    pub fn smallest_total_after_k_halvings(values: Vec<i32>, k: i32) -> i32 {
        // Max-heap. The removal floor(p/2) is non-decreasing in p, so always
        // halving the current max is optimal: any operation on a smaller
        // pile could be swapped to the larger one without worsening the total.
        let mut heap: BinaryHeap<i32> = BinaryHeap::from(values);
        for _ in 0..k {
            let top = *heap.peek().unwrap();
            if top == 1 {
                break; // floor(1/2) removes nothing: remaining ops are no-ops
            }
            heap.pop();
            heap.push(top - top / 2); // push the half that remains
        }
        heap.iter().sum()
    }
}
