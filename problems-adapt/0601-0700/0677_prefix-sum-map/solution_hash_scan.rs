use std::collections::HashMap;

// A plain key -> value hash map: no nodes, no per-put maintenance. put()
// stores the pair and stops -- the map carries no structure beyond the
// pairs themselves -- and prefixSum() pays for that at query time,
// scanning every stored key and summing the values of those that start
// with the prefix.
pub struct PrefixSumMap {
    values: HashMap<String, i32>,
}

impl PrefixSumMap {
    pub fn new() -> Self {
        PrefixSumMap { values: HashMap::new() }
    }

    pub fn put(&mut self, key: String, val: i32) {
        self.values.insert(key, val);
    }

    pub fn prefixSum(&mut self, prefix: String) -> i32 {
        let mut total: i64 = 0;
        for (key, val) in &self.values {
            if key.starts_with(&prefix) {
                total += i64::from(*val);
            }
        }
        total as i32
    }
}
