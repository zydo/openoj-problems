impl Solution {
    pub fn steps_until_higher(readings: Vec<i32>) -> Vec<i32> {
        let n = readings.len();
        let mut answer = vec![0i32; n];
        // Stack of positions still waiting for a higher one; their readings
        // are non-increasing bottom to top. Unanswered positions keep answer 0.
        let mut stack: Vec<usize> = Vec::with_capacity(n);
        for (index, &reading) in readings.iter().enumerate() {
            // Strictly higher the current reading resolves each waiting index on top; equal
            // readings leave them waiting (strict < comparison).
            while let Some(&previous) = stack.last() {
                if readings[previous] < reading {
                    stack.pop();
                    answer[previous] = (index - previous) as i32;
                } else {
                    break;
                }
            }
            stack.push(index);
        }
        answer
    }
}
