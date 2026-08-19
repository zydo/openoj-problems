use std::cmp::Reverse;
use std::collections::BinaryHeap;

impl Solution {
    pub fn cheapest_pick_sum(costs: Vec<i32>, k: i32, window: i32) -> i64 {
        let n = costs.len();
        let k = k as usize;
        let window = window as usize;
        // Windows overlap => every remaining worker is always eligible, so
        // the greedy is just "hire the k cheapest overall".
        if 2 * window >= n {
            let mut sorted = costs.clone();
            sorted.sort_unstable();
            return sorted.iter().take(k).map(|&c| c as i64).sum();
        }
        // Reverse<(cost, idx)> makes it a min-heap whose cost ties break by
        // the smaller index; left = front window, right = back window.
        let mut left: BinaryHeap<Reverse<(i32, usize)>> = BinaryHeap::new();
        let mut right: BinaryHeap<Reverse<(i32, usize)>> = BinaryHeap::new();
        for i in 0..window {
            left.push(Reverse((costs[i], i)));
        }
        for i in n - window..n {
            right.push(Reverse((costs[i], i)));
        }
        // i feeds left and j feeds right from the untouched middle; i <= j
        // guards against inserting a middle worker twice.
        let mut i = window;
        let mut j = n - window - 1;
        let mut total: i64 = 0;
        for _ in 0..k {
            // Cheaper top wins; '<=' prefers left on ties.
            let take_left = match (left.peek(), right.peek()) {
                (Some(l), Some(r)) => l.0 <= r.0,
                (Some(_), None) => true,
                (None, _) => false,
            };
            if take_left {
                let Reverse((cost, _)) = left.pop().unwrap();
                total += cost as i64;
                if i <= j {
                    left.push(Reverse((costs[i], i)));
                    i += 1;
                }
            } else {
                let Reverse((cost, _)) = right.pop().unwrap();
                total += cost as i64;
                if i <= j {
                    right.push(Reverse((costs[j], j)));
                    j -= 1;
                }
            }
        }
        total
    }
}
