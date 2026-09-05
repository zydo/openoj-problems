# Most Integers Within a Budget II

## Description

You are given an integer array `banned` and two integers `n` and
`maxSum`. Build a set of integers that satisfies every rule below:

- each integer you take must lie between 1 and `n` inclusive;
- no integer may be taken twice;
- an integer appearing in `banned` may not be taken at all;
- the sum of everything you take must not go over `maxSum`.

Return the greatest number of integers such a set can hold.

### Example 1

```text
Input: banned = [14,2], n = 20, maxSum = 10
Output: 3
Explanation: Take 1, then 3 and 4 — a total of 8. Skipping the banned 2,
the next candidate 5 would lift the total to 13, past the budget, and
every value after it is larger still.
```

### Example 2

```text
Input: banned = [5,2,5,8], n = 9, maxSum = 15
Output: 4
Explanation: With 2, 5, and 8 off the table, take 1, 3, 4, and 6 for a
total of 14; the candidate 7 would push that to 21, and 8 is banned
anyway.
```

### Example 3

```text
Input: banned = [1], n = 100, maxSum = 20
Output: 5
Explanation: The integers 2, 3, 4, 5, and 6 sum to exactly 20, and the
next candidate 7 would push past it.
```

### Constraints

- `1 <= banned.length <= 10⁵`
- `1 <= banned[i] <= n <= 10⁹`
- `1 <= maxSum <= 10¹⁵`

## Hints

### Hint 1

Taking the cheapest remaining candidate is never wrong: swapping any
chosen value for a smaller unchosen one only frees budget.

### Hint 2

After sorting the distinct bans, the allowed values arrive in runs of
consecutive integers; a run starting at `lo` whose first `c` values are
taken costs `c · (2·lo + c − 1) / 2`.

### Hint 3

Swallow runs whole while the budget holds; the first run that no longer
fits contains the cutoff, and a single binary search inside it settles
how many of its values you can still afford.
