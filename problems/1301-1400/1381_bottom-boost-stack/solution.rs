pub struct BottomBoostStack {
    values: Vec<i64>,
    pending: Vec<i64>,
    max_size: usize,
}

impl BottomBoostStack {
    pub fn new(max_size: i32) -> Self {
        BottomBoostStack {
            values: Vec::new(),
            pending: Vec::new(),
            max_size: max_size as usize,
        }
    }

    pub fn push(&mut self, x: i32) {
        if self.values.len() < self.max_size {
            self.values.push(x as i64);
            self.pending.push(0);
        }
    }

    pub fn pop(&mut self) -> i32 {
        let value = match self.values.pop() {
            None => return -1,
            Some(value) => value,
        };
        let increment = self.pending.pop().unwrap();
        if let Some(deepest) = self.pending.last_mut() {
            *deepest += increment;
        }
        (value + increment) as i32
    }

    pub fn boost(&mut self, k: i32, val: i32) {
        let limit = (k as i64).min(self.values.len() as i64);
        if limit > 0 {
            self.pending[(limit - 1) as usize] += val as i64;
        }
    }
}
