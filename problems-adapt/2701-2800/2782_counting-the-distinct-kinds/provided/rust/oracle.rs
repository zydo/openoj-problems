// Problem-provided oracle (KindOracle), Rust side. Assembled into
// every submission's crate by the judge; never editable in the editor.
// Constructed from the case state: the kinds assignment as a generic
// value plus the query budget; only has_same_kind reveals it.
#[allow(dead_code)]
pub struct KindOracle {
    kinds: Vec<i32>,
    budget: i64,
}

impl KindOracle {
    pub fn new(construction: &[OjValue], budget: i64) -> Self {
        let items = match construction.first() {
            Some(OjValue::Array(items)) => items.clone(),
            _ => panic!("KindOracle kinds must be an array"),
        };
        let mut kinds = Vec::with_capacity(items.len());
        for item in items {
            match item {
                OjValue::Int(v) => kinds.push(v as i32),
                _ => panic!("KindOracle kinds must be integers"),
            }
        }
        KindOracle { kinds, budget }
    }

    fn spend(&mut self) {
        if self.budget <= 0 {
            panic!("KindOracle query budget exhausted");
        }
        self.budget -= 1;
    }

    // Reports whether elements a and b share a kind; out-of-range
    // arguments answer false, per the statement.
    pub fn has_same_kind(&mut self, a: i32, b: i32) -> bool {
        self.spend();
        let len = self.kinds.len() as i32;
        if a < 0 || a >= len || b < 0 || b >= len {
            return false;
        }
        self.kinds[a as usize] == self.kinds[b as usize]
    }
}
