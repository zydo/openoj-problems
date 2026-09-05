impl Solution {
    pub fn arrange_by_height(names: Vec<String>, heights: Vec<i32>) -> Vec<String> {
        // Sort indices by descending height; heights are distinct, so the
        // comparator fully orders every pair and no stability is relied on.
        let mut order: Vec<usize> = (0..names.len()).collect();
        order.sort_by(|&a, &b| heights[b].cmp(&heights[a]));
        order.into_iter().map(|i| names[i].clone()).collect()
    }
}
