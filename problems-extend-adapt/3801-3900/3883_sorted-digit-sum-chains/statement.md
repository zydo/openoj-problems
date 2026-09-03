# Sorted Digit-Sum Chains

## Description

An array `digitSum` of length `n` is given.

A chain is an array `arr` of the same length that satisfies all of:

- every element lies in `0 <= arr[i] <= 5000`,
- the elements never decrease from one position to the next,
- the sum of the digits of `arr[i]` is exactly `digitSum[i]`.

Count the distinct chains. The total can be huge, so report it modulo
`10⁹ + 7`.

### Example 1

```text
Input: digitSum = [5,5,5]
Output: 30856
Explanation:
    Both positions may repeat a value, so the middle chain is any
    non-decreasing triple drawn from the values whose digits sum to 5.
    Counting them all gives 30856.
```

### Example 2

```text
Input: digitSum = [0,0]
Output: 1
Explanation:
    Only 0 has digit sum 0, and the non-decreasing rule leaves just the
    single chain [0, 0].
```

### Example 3

```text
Input: digitSum = [30,31]
Output: 4
Explanation:
    Four values in range have digit sum 30: 3999, 4899, 4989, and 4998.
    The sole digit-sum-31 value is 4999, and each of the four precedes
    it, so there are 4 chains.
```

### Example 4

```text
Input: digitSum = [9,0]
Output: 0
Explanation:
    Every digit-sum-9 value is at least 9, while the second position
    demands the value 0 — nothing fits after it.
```

### Constraints

- `1 <= digitSum.length <= 1000`
- `0 <= digitSum[i] <= 50`

## Hints

### Hint 1

Bucket every value from `0` to `5000` by its digit sum once; each bucket
ends up sorted, and buckets beyond digit sum 31 stay empty.

### Hint 2

Let `dp[j]` be the number of chains that end exactly at the `j`-th value
of the current position's bucket.

### Hint 3

To move to the next position, prefix-sum the previous `dp` and binary-
search each new candidate in the previous bucket: every predecessor with a
smaller-or-equal value is a compatible way to extend a chain.

### Hint 4

Sum the final `dp` to close the count.
