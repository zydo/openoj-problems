impl Solution {
    pub fn max_tasks(windows: Vec<Vec<i32>>) -> i32 {
        // Day sweep over windows sorted by start day; a min-heap (Reverse) of
        // end days holds the windows available today.
        let mut windows = windows;
        windows.sort();
        let n = windows.len();
        let mut i = 0usize;
        let mut day = 1i32;
        let mut attended = 0i32;
        let mut open_ends = std::collections::BinaryHeap::new();
        while i < n || !open_ends.is_empty() {
            // Heap empty: skip idle days by jumping the clock straight to
            // the next event's start day.
            if open_ends.is_empty() {
                day = day.max(windows[i][0]);
            }
            // Every event that has started becomes available today.
            while i < n && windows[i][0] <= day {
                open_ends.push(std::cmp::Reverse(windows[i][1]));
                i += 1;
            }
            // Discard windows whose end day already passed — lost regardless.
            while let Some(&std::cmp::Reverse(top)) = open_ends.peek() {
                if top < day {
                    open_ends.pop();
                } else {
                    break;
                }
            }
            // Attend the soonest-ending (most perishable) event; an exchange
            // argument shows swapping it in never breaks feasibility.
            if open_ends.pop().is_some() {
                attended += 1;
            }
            day += 1;
        }
        attended
    }
}
