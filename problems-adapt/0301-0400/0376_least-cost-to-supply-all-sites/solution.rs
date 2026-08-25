impl Solution {
    pub fn least_cost_to_supply_all(n: i32, sources: Vec<i32>, links: Vec<Vec<i32>>) -> i32 {
        let n = n as usize;
        // Kruskal over sites 1..n plus a virtual node 0 (source edges).
        let mut edges: Vec<(i32, usize, usize)> = Vec::with_capacity(n + links.len());
        for i in 0..n {
            edges.push((sources[i], 0, i + 1));
        }
        for pipe in &links {
            edges.push((pipe[2], pipe[0] as usize, pipe[1] as usize));
        }
        edges.sort();

        let mut parent: Vec<usize> = (0..=n).collect();

        fn find(parent: &mut Vec<usize>, mut x: usize) -> usize {
            while parent[x] != x {
                parent[x] = parent[parent[x]];
                x = parent[x];
            }
            x
        }

        let mut total = 0i32;
        let mut used = 0usize;
        for &(cost, a, b) in &edges {
            let ra = find(&mut parent, a);
            let rb = find(&mut parent, b);
            if ra != rb {
                parent[ra] = rb;
                total += cost;
                used += 1;
                if used == n {
                    break;
                }
            }
        }
        total
    }
}
