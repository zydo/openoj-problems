impl Solution {
    pub fn contains_anagram(pattern: String, text: String) -> bool {
        let pattern = pattern.as_bytes();
        let text = text.as_bytes();
        let (m, n) = (pattern.len(), text.len());
        // No window of length m can exist inside a shorter text.
        if m > n {
            return false;
        }
        let idx = |b: u8| (b - b'a') as usize;
        let mut need = [0i32; 26];
        let mut window = [0i32; 26];
        for i in 0..m {
            need[idx(pattern[i])] += 1;
            window[idx(text[i])] += 1;
        }
        // Matching frequency vectors means the window is a permutation of pattern.
        if window == need {
            return true;
        }
        for i in m..n {
            // Slide one position: add the entering char, drop the leaving one.
            window[idx(text[i])] += 1;
            window[idx(text[i - m])] -= 1;
            if window == need {
                return true;
            }
        }
        false
    }
}
