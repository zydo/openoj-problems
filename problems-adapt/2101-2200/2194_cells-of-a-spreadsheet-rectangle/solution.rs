impl Solution {
    pub fn rectangle_cells(s: String) -> Vec<String> {
        // Columns outer, rows inner produces exactly the required order.
        let bytes = s.as_bytes();
        let (c1, r1, c2, r2) = (bytes[0], bytes[1], bytes[3], bytes[4]);
        let mut out = Vec::new();
        for col in c1..=c2 {
            for row in r1..=r2 {
                out.push(String::from_utf8(vec![col, row]).unwrap());
            }
        }
        out
    }
}
