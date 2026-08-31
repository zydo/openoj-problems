use std::collections::HashMap;

// A prefix trie whose every node on a key's path carries the prefixSum of the
// current values of all live keys passing through it: put() adds the
// key's CHANGE in value along its path -- a side map remembers the previous
// value, so overwriting a key corrects the running totals instead of
// double-counting -- and prefixSum() walks the prefix and returns the node's
// total, or 0 when the walk falls off the trie.
struct TrieNode {
    children: HashMap<u8, TrieNode>,
    score: i64,
}

pub struct PrefixSumMap {
    root: TrieNode,
    values: HashMap<String, i32>,
}

impl PrefixSumMap {
    pub fn new() -> Self {
        PrefixSumMap {
            root: TrieNode {
                children: HashMap::new(),
                score: 0,
            },
            values: HashMap::new(),
        }
    }

    pub fn put(&mut self, key: String, val: i32) {
        let delta = i64::from(val) - i64::from(self.values.get(&key).copied().unwrap_or(0));
        self.values.insert(key.clone(), val);
        let mut node = &mut self.root;
        for byte in key.bytes() {
            node = node.children.entry(byte).or_insert_with(|| TrieNode {
                children: HashMap::new(),
                score: 0,
            });
            node.score += delta;
        }
    }

    pub fn prefixSum(&mut self, prefix: String) -> i32 {
        let mut node = &self.root;
        for byte in prefix.bytes() {
            match node.children.get(&byte) {
                Some(child) => node = child,
                None => return 0,
            }
        }
        node.score as i32
    }
}
