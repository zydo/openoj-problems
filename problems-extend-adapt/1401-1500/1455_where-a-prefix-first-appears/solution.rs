impl Solution {
    pub fn first_prefix_match(sentence: String, search_word: String) -> i32 {
        for (index, word) in sentence.split(' ').enumerate() {
            if word.starts_with(&search_word) {
                return index as i32 + 1;
            }
        }
        -1
    }
}
