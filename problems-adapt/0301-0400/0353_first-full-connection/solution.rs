impl Solution {
    pub fn first_full_connection(events: Vec<Vec<i32>>, n: i32) -> i32 {
        // Replay events chronologically; the structures track connectivity.
        let n = n as usize;
        let mut sorted = events;
        sorted.sort_by_key(|log| log[0]);
        let mut parent: Vec<usize> = (0..n).collect();
        // Path-halving find keeps the trees shallow across replays.
        fn find(parent: &mut [usize], mut a: usize) -> usize {
            while parent[a] != a {
                parent[a] = parent[parent[a]];
                a = parent[a];
            }
            a
        }
        // The component counter tracks the group count so no global scan is
        // ever needed.
        let mut components = n;
        for log in &sorted {
            let rx = find(&mut parent, log[1] as usize);
            let ry = find(&mut parent, log[2] as usize);
            // Redundant (already-connected) events merge nothing.
            if rx != ry {
                parent[rx] = ry;
                components -= 1;
                // This merge closed the last divide: everything is connected.
                if components == 1 {
                    return log[0];
                }
            }
        }
        -1
    }
}
