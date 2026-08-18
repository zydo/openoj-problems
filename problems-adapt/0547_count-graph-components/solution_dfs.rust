impl Solution {
    pub fn count_components(adjacency: Vec<Vec<i32>>) -> i32 {
        let n = adjacency.len();
        let mut visited = vec![false; n];
        let mut components = 0;
        let mut stack: Vec<usize> = Vec::new();
        for start in 0..n {
            if visited[start] {
                continue;
            }
            // An unvisited city during the sweep starts a new component;
            // this one traversal absorbs exactly one component.
            components += 1;
            visited[start] = true;
            stack.push(start);
            while let Some(city) = stack.pop() {
                for other in 0..n {
                    if adjacency[city][other] == 1 && !visited[other] {
                        // Mark at push time so no city is stacked twice;
                        // membership is by visitation, so self-loops and the
                        // symmetric matrix never double count.
                        visited[other] = true;
                        stack.push(other);
                    }
                }
            }
        }
        components
    }
}
