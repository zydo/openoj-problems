use std::collections::HashSet;

impl Solution {
    pub fn list_contains_cycle(values: Vec<i32>, tail_link: i32) -> bool {
        if values.is_empty() {
            // Empty input is acyclic by convention.
            return false;
        }
        // Materialize the wire form with indices as links: NIL stands for a
        // null successor, otherwise next[i] gives node i's successor.
        const NIL: usize = usize::MAX;
        let mut next = vec![NIL; values.len()];
        for i in 0..values.len() - 1 {
            next[i] = i + 1;
        }
        // Close the cycle by pointing the tail at the given index.
        if tail_link != -1 {
            next[values.len() - 1] = tail_link as usize;
        }
        // Walk from node 0 remembering every index seen; a cycle traps the
        // walk, so the first node to come around a second time proves it.
        // insert() reports false exactly when the node was already there.
        let mut seen: HashSet<usize> = HashSet::new();
        let mut node = 0usize;
        while node != NIL {
            if !seen.insert(node) {
                return true;
            }
            node = next[node];
        }
        // The walk ran off the end of the list: no cycle.
        false
    }
}
