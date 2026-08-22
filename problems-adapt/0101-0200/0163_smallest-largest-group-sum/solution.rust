impl Solution {
    pub fn smallest_largest_group_sum(nums: Vec<i32>, k: i32) -> i32 {
        let k = k as usize;
        let mut groups = vec![0i64; k];
        // i64::MAX start guarantees the first complete leaf always improves
        let mut best = i64::MAX;
        Self::backtrack(&nums, &mut groups, 0, 0, &mut best);
        best as i32
    }

    fn backtrack(nums: &[i32], groups: &mut Vec<i64>, i: usize, cur_max: i64, best: &mut i64) {
        // bound pruning: the running max only grows, so this branch can no
        // longer beat the best complete distribution found so far
        if cur_max >= *best {
            return;
        }
        // all items placed: the running max is this leaf's cost
        if i == nums.len() {
            *best = cur_max;
            return;
        }
        let mut tried: std::collections::HashSet<i64> = std::collections::HashSet::new();
        for j in 0..groups.len() {
            // symmetry: groups holding equal totals are interchangeable,
            // so try each distinct total only once
            if tried.contains(&groups[j]) {
                continue;
            }
            tried.insert(groups[j]);
            groups[j] += nums[i] as i64;
            let nm = cur_max.max(groups[j]);
            Self::backtrack(nums, groups, i + 1, nm, best);
            groups[j] -= nums[i] as i64;
        }
    }
}
