pub struct SuffixProducts {
    prefix: Vec<i64>,
}

impl SuffixProducts {
    pub fn new() -> Self {
        SuffixProducts { prefix: vec![1] }
    }

    pub fn append(&mut self, num: i32) {
        if num == 0 {
            self.prefix.truncate(1);
            return;
        }
        let next = *self.prefix.last().unwrap() * num as i64;
        self.prefix.push(next);
    }

    pub fn suffixProduct(&mut self, k: i32) -> i32 {
        let size = self.prefix.len();
        if k as usize >= size {
            return 0;
        }
        (self.prefix[size - 1] / self.prefix[size - 1 - k as usize]) as i32
    }
}
