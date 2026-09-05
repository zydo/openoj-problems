use std::collections::HashMap;

pub struct ScoreTable {
    scores: HashMap<i32, i64>,
}

impl ScoreTable {
    pub fn new() -> Self {
        ScoreTable { scores: HashMap::new() }
    }

    // The design replay dispatches by the action name, so the method keeps
    // LeetCode's camelCase spelling (as the landed design bundles do).
    pub fn recordScore(&mut self, playerId: i32, score: i32) {
        *self.scores.entry(playerId).or_insert(0) += score as i64;
    }

    pub fn topScores(&mut self, k: i32) -> i64 {
        // Removing on reset (not zeroing) keeps zeros out of this sort.
        let mut values: Vec<i64> = self.scores.values().copied().collect();
        values.sort_unstable_by(|a, b| b.cmp(a));
        values.iter().take(k as usize).sum()
    }

    pub fn reset(&mut self, playerId: i32) {
        self.scores.remove(&playerId);
    }
}
