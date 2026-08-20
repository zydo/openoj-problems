# Solutions — Longest Scattered Palindrome Within k Letter Shifts

## Interval DP with a spending budget

Take the familiar longest-palindromic-subsequence recurrence and attach a
third index: `dp[i][j][c]` is the longest palindromic subsequence of
`s[i..j]` reachable with at most `c` operations. Three moves close each
state: give up the left end, give up the right end, or appoint both ends as
the palindrome's outer pair. The pairing move pays the circular distance
`min(|a − b|, 26 − |a − b|)` between the two end letters — the cheapest way
to make them equal, since meeting anywhere between them costs the same and
only equality matters — and continues on the inside with the budget reduced
by that amount, collecting two positions for the trouble.

Filling the table by increasing substring length guarantees both shorter
substrings are ready for every budget, and single characters seed every
budget level with 1 (a lone character is already a palindrome and costs
nothing). The budget index means "at most", so a state summarizes every way
of spending within `c`, and subtracting the pair cost before recursing is
what keeps the accounting exact rather than approximate.

Circularity is where the distances surprise: in `"zma"` with `k = 1`, the
outer pair `('z', 'a')` is 25 apart the plain way but 1 apart around the
wrap, so one step builds "zmz" — the middle letter never needs an edit,
because unpaired centers are free. Example 2's `"acfed"` spends its budget
on two pairs at once (`'c'`→`'d'`, `'f'`→`'e'`, leaving "deed"), which is
the recurrence pairing ends and then pairing the next pair in. And when the
budget covers every pair, as in `"bbbaaa"` with `k = 3`, the answer is the
full length.

**Complexity:** `O(n² · k)` time and space.
