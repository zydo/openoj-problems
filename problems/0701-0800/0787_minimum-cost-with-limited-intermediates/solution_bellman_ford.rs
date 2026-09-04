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
        let inf = i32::MAX / 2;
        // After r full rounds, dist[v] is the cheapest cost using at
        // most r edges; maxIntermediates internal nodes allow maxIntermediates+1 links, so run maxIntermediates+1 rounds.
        let mut dist = vec![inf; nodeCount];
        dist[source] = 0;
        for _ in 0..(maxIntermediates + 1) {
            // Relax from a frozen copy: writing in place would chain
            // several edges inside one round and exceed the stop limit.
            let mut ndist = dist.clone();
            let mut changed = false;
            for link in &links {
                let f = link[0] as usize;
                let t = link[1] as usize;
                let weight = link[2];
                if dist[f].saturating_add(weight) < ndist[t] {
                    ndist[t] = dist[f] + weight;
                    changed = true;
                }
            }
            dist = ndist;
            // A round that changed nothing never improves later rounds.
            if !changed {
                break;
            }
        }
        // A surviving infinity means the destination is unreachable
        // within the allowance.
        if dist[target] >= inf {
            -1
        } else {
            dist[target]
        }
    }
}
