use std::collections::HashMap;

impl Solution {
    pub fn word_frequency(content: String) -> Vec<String> {
        // One counter per distinct word; split_whitespace drops
        // leading/trailing separators and never yields an empty word.
        let mut counts: HashMap<&str, i64> = HashMap::new();
        for word in content.split_whitespace() {
            *counts.entry(word).or_insert(0) += 1;
        }
        // Descending frequency, lexicographic word as the tiebreaker.
        let mut ranked: Vec<(&str, i64)> = counts.into_iter().collect();
        ranked.sort_by(|a, b| b.1.cmp(&a.1).then_with(|| a.0.cmp(b.0)));
        ranked
            .into_iter()
            .map(|(word, count)| format!("{} {}", word, count))
            .collect()
    }
}
