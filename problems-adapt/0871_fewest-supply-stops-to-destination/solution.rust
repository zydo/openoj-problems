impl Solution {
    pub fn minimum_supply_stops(destination: i32, initialRange: i32, supplies: Vec<Vec<i32>>) -> i32 {
        let mut fuel = initialRange as i64;
        let mut available: std::collections::BinaryHeap<i64> = std::collections::BinaryHeap::new();
        let mut stops = 0;
        let mut i = 0usize;
        let n = supplies.len();
        loop {
            if fuel >= destination as i64 {
                return stops;
            }
            while i < n && (supplies[i][0] as i64) <= fuel {
                available.push(supplies[i][1] as i64);
                i += 1;
            }
            match available.pop() {
                None => return -1,
                Some(f) => {
                    fuel += f;
                    stops += 1;
                }
            }
        }
    }
}
