use std::collections::{HashSet, VecDeque};

impl Solution {
    pub fn minimum_anagram_swaps(startText: String, targetText: String) -> i32 {
        let targetText = targetText.into_bytes();
        let start = startText.into_bytes();
        // Each swap is a move between strings, so BFS from startText yields
        // the minimum swap count.
        let mut queue: VecDeque<(Vec<u8>, i32)> = VecDeque::new();
        let mut seen: HashSet<Vec<u8>> = HashSet::new();
        queue.push_back((start.clone(), 0));
        seen.insert(start);
        while let Some((mut s, steps)) = queue.pop_front() {
            if s == targetText {
                return steps;
            }
            // Always fix the leftmost mismatch first: some optimal
            // solution does, and the rule prunes the branching.
            let mut i = 0;
            while s[i] == targetText[i] {
                i += 1;
            }
            for j in (i + 1)..s.len() {
                // Install targetText's letter at i, and never break an
                // already-matching j — such a swap is never minimal.
                if s[j] == targetText[i] && s[j] != targetText[j] {
                    s.swap(i, j);
                    // Only novel strings join the queue; matched
                    // positions are never touched again.
                    if seen.insert(s.clone()) {
                        queue.push_back((s.clone(), steps + 1));
                    }
                    s.swap(i, j);
                }
            }
        }
        // Unreachable: anagrams are always convertible.
        -1
    }
}
