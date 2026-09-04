// Toggle a fixed table indexed by lamp number; a lamp ends on exactly when
// it is toggled an odd number of times. Sweep indices 1..100 and collect
// the on positions — ascending order for free.
impl Solution {
    pub fn lamps_still_lit(lamps: Vec<i32>) -> Vec<i32> {
        let mut on = [false; 101];
        for &value in &lamps {
            on[value as usize] = !on[value as usize];
        }
        (1..=100i32).filter(|&i| on[i as usize]).collect()
    }
}
