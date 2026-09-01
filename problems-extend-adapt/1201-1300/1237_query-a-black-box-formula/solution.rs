impl Solution {
    pub fn collect_pairs(hiddenFormula: &mut HiddenFormula, z: i32) -> Vec<Vec<i32>> {
        let mut pairs: Vec<Vec<i32>> = Vec::new();
        let mut x: i32 = 1;
        let mut y: i32 = 1000;
        while x <= 1000 && y >= 1 {
            let value = hiddenFormula.evaluate(x, y);
            if value == z {
                pairs.push(vec![x, y]);
                x += 1;
                y -= 1;
            } else if value < z {
                x += 1;
            } else {
                y -= 1;
            }
        }
        pairs
    }
}
