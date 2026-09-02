impl Solution {
    pub fn max_word_count(sentences: Vec<String>) -> i32 {
        sentences
            .into_iter()
            .map(|sentence| sentence.bytes().filter(|&character| character == b' ').count() as i32 + 1)
            .max()
            .unwrap()
    }
}
