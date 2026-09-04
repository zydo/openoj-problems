impl Solution {
    pub fn heavier_half(balanceReader: &mut BalanceReader) -> i32 {
        // Divide and conquer: compare two equal-length halves of the
        // current range and recurse into whichever sums higher — the
        // large entry inflates exactly one side. An odd-length range
        // peels off its middle element first; a tied comparison of the
        // remaining equal-length halves means that peeled element is the
        // large one.
        fn solve(balanceReader: &mut BalanceReader, l: i32, r: i32) -> i32 {
            if l == r {
                return l;
            }
            let length = r - l + 1;
            let mid = (l + r) / 2;
            if length % 2 == 0 {
                let cmp = balanceReader.compare_sub(l, mid, mid + 1, r);
                return if cmp > 0 {
                    solve(balanceReader, l, mid)
                } else {
                    solve(balanceReader, mid + 1, r)
                };
            }
            let cmp = balanceReader.compare_sub(l, mid - 1, mid + 1, r);
            if cmp == 0 {
                return mid;
            }
            if cmp > 0 {
                solve(balanceReader, l, mid - 1)
            } else {
                solve(balanceReader, mid + 1, r)
            }
        }

        let length = balanceReader.length();
        solve(balanceReader, 0, length - 1)
    }
}
