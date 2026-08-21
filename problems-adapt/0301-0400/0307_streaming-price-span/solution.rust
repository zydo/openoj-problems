pub struct PriceSpanTracker {
    stack: Vec<(i32, i32)>,
}

impl PriceSpanTracker {
    pub fn new() -> Self {
        PriceSpanTracker { stack: Vec::new() }
    }

    pub fn record(&mut self, price: i32) -> i32 {
        let mut span = 1;
        while let Some(&(top, top_span)) = self.stack.last() {
            if top > price {
                break;
            }
            span += top_span;
            self.stack.pop();
        }
        self.stack.push((price, span));
        span
    }
}
