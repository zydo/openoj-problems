use std::collections::HashMap;

pub struct RecencyCache {
    capacity: usize,
    nodes: HashMap<i32, (i32, i32)>,
    order: Vec<i32>,
}

impl RecencyCache {
    pub fn new(capacity: i32) -> Self {
        RecencyCache {
            capacity: capacity as usize,
            nodes: HashMap::new(),
            order: Vec::new(),
        }
    }

    fn touch(&mut self, key: i32) {
        if let Some(position) = self.order.iter().position(|&k| k == key) {
            self.order.remove(position);
        }
        self.order.push(key);
    }

    pub fn get(&mut self, key: i32) -> i32 {
        match self.nodes.get(&key) {
            Some(&(_, value)) => {
                self.touch(key);
                value
            }
            None => -1,
        }
    }

    pub fn put(&mut self, key: i32, value: i32) {
        if let Some(entry) = self.nodes.get_mut(&key) {
            entry.1 = value;
            self.touch(key);
            return;
        }
        self.nodes.insert(key, (0, value));
        self.order.push(key);
        if self.nodes.len() > self.capacity {
            if let Some(&evict) = self.order.first() {
                self.order.remove(0);
                self.nodes.remove(&evict);
            }
        }
    }
}
