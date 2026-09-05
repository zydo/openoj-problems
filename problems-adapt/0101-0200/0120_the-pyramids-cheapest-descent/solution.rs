impl Solution {
    pub fn cheapest_path(rows: Vec<Vec<i32>>) -> i32 {
        // Work upward from the bottom: row[j] is the cheapest path sum from
        // column j of the row being folded down to the bottom, so a single
        // array of n entries is all the state the scan ever needs.
        let mut row = rows.last().unwrap().clone();
        for i in (0..rows.len() - 1).rev() {
            for j in 0..=i {
                // From (i, j) the two allowed steps land on (i + 1, j) and
                // (i + 1, j + 1); both sums are final before the overwrite
                // retires row[j].
                row[j] = rows[i][j] + row[j].min(row[j + 1]);
            }
        }
        row[0]
    }
}
