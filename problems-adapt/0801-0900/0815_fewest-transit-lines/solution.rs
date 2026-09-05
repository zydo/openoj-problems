use std::collections::{HashMap, HashSet, VecDeque};

impl Solution {
    pub fn fewest_transit_lines(lines: Vec<Vec<i32>>, startStop: i32, endStop: i32) -> i32 {
        // Early exits: same stop needs no line; an endpoint on no route
        // has no path.
        if startStop == endStop {
            return 0;
        }
        // Map each stop to the lines passing through it.
        let mut stop_to_routes: HashMap<i32, Vec<usize>> = HashMap::new();
        for (r, stops) in lines.iter().enumerate() {
            for &s in stops {
                stop_to_routes.entry(s).or_default().push(r);
            }
        }
        if !stop_to_routes.contains_key(&startStop) || !stop_to_routes.contains_key(&endStop) {
            return -1;
        }
        let mut used_routes: HashSet<usize> = HashSet::new();
        let mut seen_stops: HashSet<i32> = HashSet::new();
        seen_stops.insert(startStop);
        let mut queue: VecDeque<(i32, i32)> = VecDeque::new();
        queue.push_back((startStop, 0));
        while let Some((stop, rides)) = queue.pop_front() {
            let empty: Vec<usize> = Vec::new();
            let list = stop_to_routes.get(&stop).unwrap_or(&empty);
            for &r in list {
                // BFS over stops: boarding a route reaches all its
                // stops one level deeper. Expand each route only once
                // ever — re-boarding can only revisit stops already
                // found at an equal or smaller ride count.
                if used_routes.contains(&r) {
                    continue;
                }
                used_routes.insert(r);
                for &nxt in &lines[r] {
                    // The endStop is counted on sight — no need to
                    // enqueue it.
                    if nxt == endStop {
                        return rides + 1;
                    }
                    if seen_stops.insert(nxt) {
                        queue.push_back((nxt, rides + 1));
                    }
                }
            }
        }
        -1
    }
}
