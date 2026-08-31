// Distinct timestamps with their recordEvent counts, oldest first; countRecent drops
// everything at or before timestamp - 300 off the front and sums what
// survives — the window is (timestamp - 300, timestamp].
pub struct RecentEventCounter {
    hits: Vec<(i32, i32)>,
}

impl RecentEventCounter {
    pub fn new() -> Self {
        RecentEventCounter { hits: Vec::new() }
    }

    pub fn recordEvent(&mut self, timestamp: i32) {
        if let Some(newest) = self.hits.last_mut() {
            if newest.0 == timestamp {
                // Several hits may arrive at the same second; bumping the
                // newest count keeps one entry per distinct timestamp.
                newest.1 += 1;
                return;
            }
        }
        self.hits.push((timestamp, 1));
    }

    pub fn countRecent(&mut self, timestamp: i32) -> i32 {
        let cutoff = timestamp - 300;
        while self.hits.first().map_or(false, |recordEvent| recordEvent.0 <= cutoff) {
            // The window is (timestamp - 300, timestamp]: a recordEvent at
            // exactly the cutoff second is already gone.
            self.hits.remove(0);
        }
        self.hits.iter().map(|recordEvent| recordEvent.1).sum()
    }
}
