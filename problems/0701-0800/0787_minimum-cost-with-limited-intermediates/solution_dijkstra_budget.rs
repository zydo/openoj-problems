use std::cmp::Reverse;
use std::collections::BinaryHeap;

impl Solution {
    pub fn minimum_limited_route_cost(
        nodeCount: i32,
        links: Vec<Vec<i32>>,
        source: i32,
        target: i32,
        maxIntermediates: i32,
    ) -> i32 {
        let nodeCount = nodeCount as usize;
        let source = source as usize;
        let target = target as usize;
        let mut graph: Vec<Vec<(usize, i32)>> = vec![Vec::new(); nodeCount];
        for link in &links {
            graph[link[0] as usize].push((link[1] as usize, link[2]));
        }
        // State = (cost, node, links taken). Carrying the count in the
        // state is what enforces the limit: a state that already used its
        // maxIntermediates+1 links is never allowed to board another.
        let mut heap: BinaryHeap<Reverse<(i32, usize, usize)>> = BinaryHeap::new();
        heap.push(Reverse((0, source, 0)));
        let mut best = vec![usize::MAX; nodeCount];
        while let Some(Reverse((cost, node, edges))) = heap.pop() {
            // The heap pops in cost order, so the first target pop is final.
            if node == target {
                return cost;
            }
            // Dominance prune: a cheaper state that used no more links was
            // already expanded here, so this one cannot lead anywhere new.
            if edges > best[node] {
                continue;
            }
            best[node] = edges;
            if edges < (maxIntermediates + 1) as usize {
                for &(nxt, weight) in &graph[node] {
                    heap.push(Reverse((cost + weight, nxt, edges + 1)));
                }
            }
        }
        -1
    }
}
