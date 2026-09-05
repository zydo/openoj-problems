// Problem-provided oracle (RestlessNumber), Rust side. Assembled into every
// submission's crate by the judge; never editable in the editor.
// Constructed from the case state: the initial hidden number as a
// generic value, then the query budget.
#[allow(dead_code)]
pub struct RestlessNumber {
    n: i32,
    budget: i64,
}

impl RestlessNumber {
    pub fn new(construction: &[OjValue], budget: i64) -> Self {
        let n = match construction.first() {
            Some(OjValue::Int(n)) => *n as i32,
            _ => panic!("RestlessNumber n must be an integer"),
        };
        RestlessNumber { n, budget }
    }

    pub fn common_bits(&mut self, num: i32) -> i32 {
        if self.budget <= 0 {
            panic!("RestlessNumber query budget exhausted");
        }
        self.budget -= 1;
        let diff = (self.n ^ num) & ((1 << 30) - 1);
        self.n ^= num;
        30 - diff.count_ones() as i32
    }
}
