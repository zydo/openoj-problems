# One Trade To Boost Uptime II

## Description

A binary string `s` of length `n` records stretches of operation: `'1'` is
an up stretch, `'0'` a down stretch.

A trade works in two steps:

- Pick a contiguous block of `'1'`s with a `'0'` immediately on each side,
  and turn the whole block into `'0'`s.
- Then pick a contiguous block of `'0'`s with a `'1'` immediately on each
  side, and turn the whole block into `'1'`s.

What changes here is where the trade may happen. You are also given a 2D
array `queries`, where `queries[i] = [li, ri]` names the substring
`s[li...ri]`. For each query, perform at most one trade chosen entirely
inside that substring — both steps must stay within `li..ri` — and report
how many `'1'`s the whole string holds afterward. Return an array `answer`
with one value per query.

Note: for the neighbor checks, judge the queried substring as if it were
padded with one extra `'1'` at each end, i.e. as if it were `t = '1' +
s[li...ri] + '1'`; the padding never counts toward the total. Nothing
outside the window is touched, and the queries are independent — each one
starts from the original `s`.

### Example 1

```text
Input: s = "1101000110", queries = [[0,9],[2,6],[5,9]]
Output: [9,9,8]
Explanation:
- Query [0,9] covers the whole string. Zeroing the "11" at indices 7-8
  fuses it with the '0'-runs on either side into one block of six '0's
  spanning indices 4-9, which the second step fills: 9.
- Query [2,6] sees the substring "01000". Its single '1' has a '0' on
  both sides, so the trade turns the whole window into '1's: 9.
- Query [5,9] sees "00010". Zeroing the "11" at indices 7-8 leaves one
  unbroken run of five '0's in the window, which fills completely: 8.
```

### Example 2

```text
Input: s = "0110", queries = [[0,3],[1,2]]
Output: [4,2]
Explanation:
- Query [0,3] covers the whole string. Zeroing the "11" leaves "0000",
  which the padding '1's flank, so it fills back in and every position is
  up: 4.
- Query [1,2] sees "11". No '0' exists inside the window to flank a block
  of '1's, so no trade is possible and the count stays at 2.
```

### Example 3

```text
Input: s = "00100", queries = [[0,4],[1,3],[2,4]]
Output: [5,3,1]
Explanation:
- Query [0,4] covers the whole string. Zeroing the lone '1' leaves one
  run of five '0's, which fills completely: 5.
- Query [1,3] sees "010". Trading its '1' fills indices 1-3, so the
  string becomes "01110": 3.
- Query [2,4] sees "100". Its '1' touches the left padding, so no trade
  is possible and the count stays at 1.
```

### Example 4

```text
Input: s = "1000110", queries = [[0,6],[1,5],[3,6]]
Output: [7,3,5]
Explanation:
- Query [0,6] covers the whole string. Zeroing the "11" at indices 4-5
  leaves one run of six '0's spanning indices 1-6, which fills: 7.
- Query [1,5] sees "00011". The "11" ends exactly at the window's right
  edge, so the padding '1' sits beside it where a '0' would need to be —
  no trade is possible and the count stays at 3.
- Query [3,6] sees "0110". Zeroing the "11" and filling the window makes
  s[3..6] all '1's, so the string reads "1001111": 5.
```

### Constraints

- `1 <= n == s.length <= 10⁵`
- `1 <= queries.length <= 10⁵`
- `s[i]` is either `'0'` or `'1'`.
- `queries[i] = [li, ri]`
- `0 <= li <= ri < n`

## Hints

### Hint 1

Cut `s` into maximal runs and keep the `'0'`-runs as start/length pairs; a
trade's gain is always the sum of two neighboring `'0'`-runs' lengths.

### Hint 2

For a query window, a pair of adjacent `'0'`-runs counts only by the parts
that fall inside it. A pair strictly inside contributes its full sum,
while a pair touching an edge contributes its clipped length — those
boundary pairs need separate handling.

### Hint 3

Precompute the sums of every adjacent pair of `'0'`-runs into a
range-maximum structure (a sparse table works). Two binary searches find
which pairs lie wholly inside the window; the answer is the baseline count
of `'1'`s plus the best gain, or just the baseline when no trade fits.
