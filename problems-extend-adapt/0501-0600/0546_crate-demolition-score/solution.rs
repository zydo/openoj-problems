// Memoized interval DP. dfs(l, r, k) is the best score from crates[l..r]
// when k crates of crates[l]'s color, already removed from outside the
// interval, sit glued to its left and will join its group.
impl Solution {
    pub fn demolish_crates(crates: Vec<i32>) -> i32 {
        let n = crates.len();
        let mut memo = vec![vec![vec![-1; n + 1]; n]; n];
        dfs(&crates, &mut memo, 0, n - 1, 0)
    }
}

fn dfs(crates: &[i32], memo: &mut Vec<Vec<Vec<i32>>>, l: usize, r: usize, k: usize) -> i32 {
    if l > r {
        return 0;
    }
    let (mut l, mut k) = (l, k);
    // Adjacent same-colored crates never need separate treatment: holding
    // crates[l] until its identical neighbor leaves only grows the eventual
    // group, so the run joins the carry.
    while l < r && crates[l + 1] == crates[l] {
        l += 1;
        k += 1;
    }
    if memo[l][r][k] != -1 {
        return memo[l][r][k];
    }
    // Either take crates[l] and its carry now, scoring (k+1)^2...
    let mut best = (k as i32 + 1) * (k as i32 + 1) + dfs(crates, memo, l + 1, r, 0);
    // ...or hold it: clear crates[l+1..m-1] first, so crates[l] meets the
    // next same-colored crate one richer in the carry.
    for m in (l + 1)..=r {
        if crates[m] == crates[l] {
            best = best.max(dfs(crates, memo, l + 1, m - 1, 0) + dfs(crates, memo, m, r, k + 1));
        }
    }
    memo[l][r][k] = best;
    best
}
