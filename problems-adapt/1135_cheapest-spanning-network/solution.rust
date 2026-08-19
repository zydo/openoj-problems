impl Solution {
    pub fn cheapest_spanning_network(n: i32, links: Vec<Vec<i32>>) -> i32 {
        let n = n as usize;
        // Kruskal: scan edges cheapest-first; the greedy exchange argument
        // makes the accepted set a minimum spanning tree
        let mut conns = links;
        conns.sort_by_key(|c| c[2]);

        // union-find over n+1 slots (index 0 unused; nodes are 1-based)
        let mut parent: Vec<usize> = (0..=n).collect();
        fn find(parent: &mut Vec<usize>, mut x: usize) -> usize {
            // path halving keeps subsequent finds near-constant
            while parent[x] != x {
                parent[x] = parent[parent[x]];
                x = parent[x];
            }
            x
        }

        let mut total = 0i32;
        let mut components = n as i32;
        for c in &conns {
            let rx = find(&mut parent, c[0] as usize);
            let ry = find(&mut parent, c[1] as usize);
            // take the edge only when it joins two different components,
            // i.e. it closes no cycle
            if rx != ry {
                parent[rx] = ry;
                total += c[2];
                components -= 1;
                // one component left: the tree is complete, later edges are
                // all more expensive
                if components == 1 {
                    return total;
                }
            }
        }
        // edges ran out first: the graph is disconnected
        -1
    }
}
