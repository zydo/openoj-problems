use std::cmp::Reverse;
use std::collections::{BinaryHeap, HashSet};

// A used set, a fresh-number counter, and a released min-heap: acquire()
// pops the smallest released number before minting a fresh one, so the
// smallest available number always comes out; returnNumber() is a no-op on an
// available number.
pub struct NumberPool {
    limit: i32,
    next: i32,
    used: HashSet<i32>,
    released: BinaryHeap<Reverse<i32>>,
}

impl NumberPool {
    pub fn new(maxNumbers: i32) -> Self {
        NumberPool {
            limit: maxNumbers,
            next: 0,
            used: HashSet::new(),
            released: BinaryHeap::new(),
        }
    }

    pub fn acquire(&mut self) -> i32 {
        if let Some(Reverse(number)) = self.released.pop() {
            // Every released number is smaller than every fresh one, so
            // the heap's minimum is the smallest available number.
            self.used.insert(number);
            return number;
        }
        if self.next < self.limit {
            // Fresh numbers are minted in ascending order, so the counter
            // itself needs no bookkeeping.
            let number = self.next;
            self.next += 1;
            self.used.insert(number);
            return number;
        }
        -1
    }

    pub fn isAvailable(&mut self, number: i32) -> bool {
        !self.used.contains(&number)
    }

    pub fn returnNumber(&mut self, number: i32) {
        if self.used.remove(&number) {
            // The guard makes releasing an available number a no-op, so a
            // number never enters the heap twice.
            self.released.push(Reverse(number));
        }
    }
}
