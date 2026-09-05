# Counting Distinct Triplet XORs

## Description

You are given an integer array `nums` of length `n` that is a permutation
of the numbers `1` through `n`.

Combine any three entries with XOR — call the result a triplet XOR. The
three positions `i`, `j`, `k` must satisfy `i <= j <= k`, but they may
coincide, so a single entry can appear twice or even three times in one
combination.

How many different numbers can appear as a triplet XOR? Return that
count.

### Example 1

```text
Input: nums = [1,2]
Output: 2
Explanation:
The combinations give 1^1^1 = 1, 1^1^2 = 2, 1^2^2 = 1 and 2^2^2 = 2,
so the distinct triplet XORs are {1, 2}.
```

### Example 2

```text
Input: nums = [3,1,2]
Output: 4
Explanation:
Among others, 3^3^3 = 3, 3^3^1 = 1, 3^3^2 = 2 and 3^1^2 = 0. The
distinct triplet XORs are {0, 1, 2, 3}.
```

### Example 3

```text
Input: nums = [5,1,4,2,3]
Output: 8
Explanation:
Every value from 0 through 7 can be built, and no combination can reach
8 or beyond because all entries fit below 8.
```

### Constraints

- `1 <= n == nums.length <= 10⁵`
- `1 <= nums[i] <= n`
- `nums` is a permutation of the integers from `1` to `n`.

## Hints

### Hint 1

All entries sit below `2^b`, where `b` is the bit length of `n`, and
XOR-ing numbers below `2^b` can never leave that range — that caps how
many distinct triplet XORs exist.

### Hint 2

For large enough `n` the cap is met: pair XORs already cover every value
below `2^(b-1)`, and XOR-ing those with an entry that carries the top
bit (or not) fills the rest of the range.

### Hint 3

Handle tiny `n` separately: for `n < 3` the reachable set is just the
entries themselves; `n = 3` can be checked by hand.
