# Nine-Digit Combo Sum III

## Description

Given two integers `k` and `n`, find every combination of exactly `k`
distinct digits drawn from `1` through `9` whose digits add up to exactly
`n`. Each digit may be used at most once per combination, and the same
set of digits must never appear twice in the result.

Report each combination with its digits listed in increasing order, and
report the combinations themselves sorted in increasing lexicographic
order, so that repeated runs on the same input always agree.

### Example 1

```text
Input: k = 2, n = 5
Output: [[1,4],[2,3]]
Explanation: Two distinct digits from 1-9 summing to 5: 1 + 4 and 2 + 3.
No other pair works.
```

### Example 2

```text
Input: k = 3, n = 10
Output: [[1,2,7],[1,3,6],[1,4,5],[2,3,5]]
Explanation: Every set of three distinct digits from 1-9 that sums to 10,
listed in ascending order within each set and across the whole list.
```

### Example 3

```text
Input: k = 5, n = 1
Output: []
Explanation: The five smallest available digits already sum to
1+2+3+4+5 = 15, well past 1, so no combination of five distinct digits
can sum to 1.
```

### Constraints

- `2 <= k <= 9`
- `1 <= n <= 60`
