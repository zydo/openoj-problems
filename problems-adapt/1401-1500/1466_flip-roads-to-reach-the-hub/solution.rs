impl Solution {
    pub fn min_flips(n: i32, roads: Vec<Vec<i32>>) -> i32 {
        let n = n as usize;
        let mut adj: Vec<Vec<(usize, i32)>> = vec![Vec::new(); n];
        for conn in &roads {
            let a = conn[0] as usize;
            let b = conn[1] as usize;
            adj[a].push((b, 1)); // original direction a -> b
            adj[b].push((a, 0));
        }
        let mut changed = 0;
        let mut visited = vec![false; n];
        let mut stack = vec![0usize];
        visited[0] = true;
        while let Some(node) = stack.pop() {
            for &(nxt, direction) in &adj[node] {
                if visited[nxt] {
                    continue;
                }
                if direction == 1 {
                    changed += 1;
                }
                visited[nxt] = true;
                stack.push(nxt);
            }
        }
        changed
    }
}
