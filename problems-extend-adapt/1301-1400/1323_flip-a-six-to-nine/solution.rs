impl Solution {
    pub fn max_after_one_flip(num: i32) -> i32 {
        // The leftmost 6 carries the most weight, so flipping it is the one
        // best change; no 6 at all means the number is already maximal.
        let text = num.to_string();
        let flipped: String = match text.find('6') {
            Some(at) => text[..at].to_string() + "9" + &text[at + 1..],
            None => text,
        };
        flipped.parse().unwrap()
    }
}
