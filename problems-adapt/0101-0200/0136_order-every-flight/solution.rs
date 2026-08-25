use std::collections::HashMap;

impl Solution {
    pub fn order_flights(flights: Vec<Vec<String>>) -> Vec<String> {
        let mut graph: HashMap<String, Vec<String>> = HashMap::new();
        for flight in &flights {
            graph.entry(flight[0].clone()).or_default().push(flight[1].clone());
        }
        for adj in graph.values_mut() {
            adj.sort_by(|a, b| b.cmp(a)); // descending
        }

        // Iterative Hierholzer: always take the lexicographically smallest
        // unused flight (last element of the descending-sorted list).
        let mut route: Vec<String> = Vec::new();
        let mut stack: Vec<String> = vec!["JFK".to_string()];
        while let Some(airport) = stack.last().cloned() {
            let next = {
                let adj = match graph.get_mut(&airport) {
                    Some(a) => a,
                    None => {
                        // No unused edges left: emit in postorder so dead-end
                        // airports land at their latest possible position.
                        route.push(airport.clone());
                        stack.pop();
                        continue;
                    }
                };
                adj.pop()
            };
            match next {
                Some(destination) => stack.push(destination),
                None => {
                    // No unused edges left: emit in postorder so dead-end
                    // airports land at their latest possible position.
                    route.push(airport.clone());
                    stack.pop();
                }
            }
        }
        route.reverse();
        route
    }
}
