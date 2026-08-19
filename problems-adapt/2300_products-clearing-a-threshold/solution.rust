impl Solution {
    pub fn count_clearing_products(factors: Vec<i32>, values: Vec<i32>, threshold: i64) -> Vec<i32> {
        // a pair works iff factor * value >= threshold, i.e. value >= need;
        // qualifying values are exactly the strongest suffix of the sorted array
        let mut values = values;
        values.sort_unstable();
        let m = values.len();
        factors
            .iter()
            .map(|&f| {
                // ceil(threshold / f) in integer arithmetic: exact even at 1e10
                let need = (threshold + f as i64 - 1) / f as i64;
                // partition_point: first index whose value is NOT below need
                let idx = values.partition_point(|&x| (x as i64) < need);
                // every value from idx on is >= need: that suffix all qualifies
                (m - idx) as i32
            })
            .collect()
    }
}
