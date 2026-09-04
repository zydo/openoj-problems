struct TrieNode {
    children: [Option<Box<TrieNode>>; 26],
    end: bool,
}

impl TrieNode {
    fn new() -> Self {
        // One trie node: 26 child slots indexed by c - 'a' plus a
        // whole-word terminator flag; nodes appear lazily on insert.
        TrieNode {
            children: Default::default(),
            end: false,
        }
    }
}

pub struct PrefixTree {
    root: TrieNode,
}

impl PrefixTree {
    pub fn new() -> Self {
        PrefixTree { root: TrieNode::new() }
    }

    pub fn insert(&mut self, word: String) {
        let mut node = &mut self.root;
        for letter in word.bytes() {
            let slot = (letter - b'a') as usize;
            if node.children[slot].is_none() {
                node.children[slot] = Some(Box::new(TrieNode::new()));
            }
            node = node.children[slot].as_mut().unwrap();
        }
        node.end = true;
    }

    // Walks one node per character; None as soon as a slot is empty.
    fn walk(&self, text: &str) -> Option<&TrieNode> {
        let mut node = &self.root;
        for letter in text.bytes() {
            node = node.children[(letter - b'a') as usize].as_deref()?;
        }
        Some(node)
    }

    pub fn search(&mut self, word: String) -> bool {
        match self.walk(&word) {
            Some(node) => node.end,
            None => false,
        }
    }

    pub fn hasPrefix(&mut self, prefix: String) -> bool {
        self.walk(&prefix).is_some()
    }
}
