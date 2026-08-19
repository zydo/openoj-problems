impl Solution {
    pub fn most_requirement_capacity_pairs(mut requirements: Vec<i32>, mut capacities: Vec<i32>) -> i32 {
        requirements.sort_unstable();
        capacities.sort_unstable();
        // Greedy: pair the weakest unmatched requirement with the weakest
        // unmatched capacity — optimal by an exchange argument.
        let (mut i, mut j, mut matches) = (0usize, 0usize, 0i32);
        while i < requirements.len() && j < capacities.len() {
            if requirements[i] <= capacities[j] {
                matches += 1;
                i += 1;
                j += 1;
            } else {
                // Capacity too weak for the weakest remaining requirement; requirements
                // only get stronger, so it is useless forever — skip it.
                j += 1;
            }
        }
        matches
    }
}
