impl Solution {
    pub fn strip_vowels(s: String) -> String {
        s.chars()
            .filter(|&c| !matches!(c, 'a' | 'e' | 'i' | 'o' | 'u'))
            .collect()
    }
}
