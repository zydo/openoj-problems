impl Solution {
    // The first word fixes the target vowel count; every later word
    // sharing it is reversed, the rest pass through untouched.
    pub fn reverse_words(s: String) -> String {
        let words: Vec<&str> = s.split(' ').collect();
        let target = Self::count_vowels(words[0]);
        let mut out = String::from(words[0]);
        for w in &words[1..] {
            out.push(' ');
            if Self::count_vowels(w) == target {
                out.push_str(&w.chars().rev().collect::<String>());
            } else {
                out.push_str(w);
            }
        }
        out
    }

    fn count_vowels(word: &str) -> usize {
        word.chars()
            .filter(|&c| matches!(c, 'a' | 'e' | 'i' | 'o' | 'u'))
            .count()
    }
}
