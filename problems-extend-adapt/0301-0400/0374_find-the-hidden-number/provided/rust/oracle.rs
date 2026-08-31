// Problem-provided oracle (NumberJudge), Rust side. Assembled into every
// submission's crate by the judge; never editable in the editor.
// Constructed from the case state: the hidden picked number as a
// generic value, then the query budget.
#[allow(dead_code)]
pub struct NumberJudge {
    pick: i64,
    budget: i64,
}

impl NumberJudge {
    pub fn new(construction: &[OjValue], budget: i64) -> Self {
        let pick = match construction.first() {
            Some(OjValue::Int(pick)) => *pick,
            _ => panic!("NumberJudge pick must be an integer"),
        };
        NumberJudge { pick, budget }
    }

    pub fn compare_guess(&mut self, num: i32) -> i32 {
        if self.budget <= 0 {
            panic!("NumberJudge query budget exhausted");
        }
        self.budget -= 1;
        let num = i64::from(num);
        if num > self.pick {
            -1
        } else if num < self.pick {
            1
        } else {
            0
        }
    }
}
