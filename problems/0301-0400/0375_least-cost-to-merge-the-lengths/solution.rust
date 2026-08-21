use std::cmp::Reverse;
use std::collections::BinaryHeap;

impl Solution {
    pub fn least_merge_cost(lengths: Vec<i32>) -> i32 {
        if lengths.len() <= 1 {
            // a single stick needs no merge
            return 0;
        }
        let mut heap: BinaryHeap<Reverse<i64>> = lengths.into_iter().map(|x| Reverse(x as i64)).collect();
        let mut total: i64 = 0;
        // Huffman-style exchange argument: a length is paid once per merge
        // above it, so always merging the two shortest is optimal
        while heap.len() > 1 {
            let combined = heap.pop().unwrap().0 + heap.pop().unwrap().0;
            total += combined;
            // the combined stick re-enters the pool for later merges
            heap.push(Reverse(combined));
        }
        total as i32
    }
}
