impl Solution {
    pub fn count_monotone_triples(rating: Vec<i32>) -> i32 {
        // Fix the middle index j: a rising triple picks any smaller rating
        // on the left and any larger on the right; a falling triple mirrors
        // it. Summing the four counts over every j counts each triple
        // exactly once, by its middle element.
        let n = rating.len();
        let mut triples = 0;
        for j in 0..n {
            let less_left = rating[..j].iter().filter(|value| **value < rating[j]).count() as i32;
            let greater_left = j as i32 - less_left;
            let greater_right = rating[j + 1..].iter().filter(|value| **value > rating[j]).count() as i32;
            let less_right = (n as i32 - 1 - j as i32) - greater_right;
            triples += less_left * greater_right + greater_left * less_right;
        }
        triples
    }
}
