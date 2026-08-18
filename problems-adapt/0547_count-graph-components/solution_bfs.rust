use std::collections::VecDeque;

impl Solution {
    pub fn count_components(adjacency: Vec<Vec<i32>>) -> i32 {
        let n = adjacency.len();
        let mut visited = vec![false; n];
        let mut components = 0;
        for start in 0..n {
            if visited[start] {
                continue;
            }
            // An unvisited city during the sweep starts a new component;
            // this one traversal absorbs exactly one component.
            components += 1;
            visited[start] = true;
            let mut queue: VecDeque<usize> = VecDeque::new();
            queue.push_back(start);
            // The FIFO queue spreads through the component in waves, expanding
            // every city at hop distance d before any at d + 1, yet only
            // visitation, not the order, decides the count.
            while let Some(city) = queue.pop_front() {
                for other in 0..n {
                    if adjacency[city][other] == 1 && !visited[other] {
                        // Mark at enqueue time so no city enters the queue twice;
                        // each city is dequeued once and its adjacency row scanned
                        // once.
                        visited[other] = true;
                        queue.push_back(other);
                    }
                }
            }
        }
        components
    }
}
