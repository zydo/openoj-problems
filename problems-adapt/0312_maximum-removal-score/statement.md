# Maximum Removal Score

## Description

You are given an integer array `nums`, and you must take every entry out of it,
one entry per step, in whatever order you like. Removing an entry scores the
product of three numbers: the entry itself, whatever now sits immediately to
its left, and whatever now sits immediately to its right. The neighbours are
the ones present *at that moment*, so each removal closes a gap and changes
what the next one is worth. When a removal happens at the very start or the
very end of what is left, the missing side counts as a `1`.

Return the largest total score achievable over all removal orders.

### Example 1

```text
Input: nums = [4,2,7,3]
Output: 156
Explanation: Take 2, then 7, then 3, then 4.
[4,2,7,3] -> [4,7,3] -> [4,3] -> [4] -> []
score  =  4*2*7  +  4*7*3  +  4*3*1  +  1*4*1  =  56 + 84 + 12 + 4 = 156
Removing 2 early is what lets 4 and 7 stand next to each other.
```

### Example 2

```text
Input: nums = [6]
Output: 6
Explanation: The only entry has no neighbour on either side, so both count as
1 and the single removal scores 1*6*1.
```

### Example 3

```text
Input: nums = [2,0,9]
Output: 27
Explanation: A removal that involves the 0 scores nothing, so take it first
and let the rest stand together.
[2,0,9] -> [2,9] -> [9] -> []
score  =  2*0*9  +  1*2*9  +  1*9*1  =  0 + 18 + 9 = 27
```

### Constraints

- `n` is the length of `nums`, with `1 <= n <= 300`.
- Every entry satisfies `0 <= nums[i] <= 100`.

## Hints

### Hint 1

Adding an imaginary `1` before the first entry and after the last one removes
the special case at the two ends: every removal then has a neighbour on both
sides, and the two imaginary entries are never taken.

### Hint 2

Asking which entry goes **first** leads nowhere: the array splits into two
pieces whose later scores depend on each other through the gap that just
closed. Ask which entry goes **last** within a stretch instead. By then
everything strictly inside is gone, so that entry's score is fixed by the two
values bounding the stretch — values that stay put for the whole subproblem.

### Hint 3

Work with open intervals. Let `best[i][j]` be the greatest total obtainable by
removing every entry strictly between positions `i` and `j` of the padded
array, with the entries at `i` and `j` themselves left standing.

### Hint 4

For each `k` strictly between `i` and `j`, suppose `k` is taken last: it scores
`padded[i] * padded[k] * padded[j]`, and the two sides clear out independently
before it, contributing `best[i][k]` and `best[k][j]`. Take the best `k`, and
fill the table by increasing stretch width so both halves are ready.
