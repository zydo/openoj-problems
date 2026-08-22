impl Solution {
    pub fn sentences_equivalent(
        wordsA: Vec<String>,
        wordsB: Vec<String>,
        synonyms: Vec<Vec<String>>,
    ) -> bool {
        // Different lengths can never be similar.
        if wordsA.len() != wordsB.len() {
            return false;
        }

        type Parent = std::collections::HashMap<String, String>;
        // Unseen words register as their own singleton component; path
        // compression keeps the structure flat.
        fn find(parent: &mut Parent, x: &str) -> String {
            match parent.get(x) {
                None => {
                    parent.insert(x.to_string(), x.to_string());
                    x.to_string()
                }
                Some(p) if p == x => x.to_string(),
                Some(p) => {
                    let pp = p.clone();
                    let grandparent = match parent.get(&pp) {
                        Some(g) => g.clone(),
                        None => pp.clone(),
                    };
                    parent.insert(x.to_string(), grandparent.clone());
                    find(parent, &grandparent)
                }
            }
        }

        // Symmetry + transitivity: similar exactly when identical or in the
        // same component, so unioning the pairs captures the whole relation.
        let mut parent: Parent = std::collections::HashMap::new();
        for pair in &synonyms {
            let ra = find(&mut parent, &pair[0]);
            let rb = find(&mut parent, &pair[1]);
            if ra != rb {
                parent.insert(ra, rb);
            }
        }

        for i in 0..wordsA.len() {
            // Identical words pass; otherwise the roots must agree.
            if wordsA[i] != wordsB[i] {
                let ra = find(&mut parent, &wordsA[i]);
                let rb = find(&mut parent, &wordsB[i]);
                if ra != rb {
                    return false;
                }
            }
        }
        true
    }
}
