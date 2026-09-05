use std::collections::HashMap;

// Words grouped by length; each loadWords REPLACES the previous dictionary,
// so matchesOneEdit only ever sees the latest call's words. A candidate matches when
// it differs from the matchesOneEdit word in exactly one position.
pub struct OneEditDictionary {
    buckets: HashMap<usize, Vec<String>>,
}

impl OneEditDictionary {
    pub fn new() -> Self {
        OneEditDictionary {
            buckets: HashMap::new(),
        }
    }

    pub fn loadWords(&mut self, dictionary: Vec<String>) {
        let mut buckets: HashMap<usize, Vec<String>> = HashMap::new();
        for word in dictionary {
            buckets.entry(word.len()).or_default().push(word);
        }
        self.buckets = buckets;
    }

    pub fn matchesOneEdit(&mut self, searchWord: String) -> bool {
        let wanted = searchWord.as_bytes();
        if let Some(words) = self.buckets.get(&wanted.len()) {
            for word in words {
                let mut mismatches = 0;
                for (index, byte) in word.bytes().enumerate() {
                    if byte != wanted[index] {
                        mismatches += 1;
                        if mismatches > 1 {
                            break;
                        }
                    }
                }
                if mismatches == 1 {
                    return true;
                }
            }
        }
        false
    }
}
