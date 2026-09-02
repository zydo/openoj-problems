// Problem-provided oracle (MaskedNumber), Rust side. Assembled into every
// submission's crate by the judge; never editable in the editor.
// Constructed from the case state: the hidden number as a generic value,
// then the query budget.
#[allow(dead_code)]
pub struct MaskedNumber {
    n: i64,
    budget: i64,
}

impl MaskedNumber {
    pub fn new(construction: &[OjValue], budget: i64) -> Self {
        let n = match construction.first() {
            Some(OjValue::Int(n)) => *n,
            _ => panic!("MaskedNumber n must be an integer"),
        };
        MaskedNumber { n, budget }
    }

    pub fn common_set_bits(&mut self, num: i32) -> i32 {
        if self.budget <= 0 {
            panic!("MaskedNumber query budget exhausted");
        }
        self.budget -= 1;
        (self.n & i64::from(num)).count_ones() as i32
    }
}
