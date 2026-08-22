# Count Subsequence Pairs with Matching GCDs

## Description

You are given an integer array `nums`.

A pair `(seq1, seq2)` qualifies when

- `seq1` and `seq2` are both non-empty subsequences of `nums`,
- they share no index, and
- the greatest common divisor of the elements of `seq1` equals the
  greatest common divisor of the elements of `seq2`.

Return the number of qualifying pairs. The two members are ordered —
swapping `seq1` and `seq2` gives a different pair — and subsequences are
distinguished by index, not by value.

Since the answer may be very large, return it modulo `10⁹ + 7`.

### Example 1

```text
Input: nums = [3,3,9]
Output: 6
Explanation: Each lone 3 has gcd 3, and so does the other 3 either alone
or together with the 9 (gcd(3, 9) = 3). That gives three unordered
matches — 3 | 3, 3 | (3, 9), and (3, 9) | 3 — each counted in both
orders. The 9 on its own has gcd 9, which nothing else reaches.
```

### Example 2

```text
Input: nums = [2,3,4,6]
Output: 2
Explanation: The values 4 and 6 together have gcd 2 — the same as the
lone value 2 — so the subsequence [4,6] matches the subsequence [2],
once in each order. Nothing else agrees: involving the 3 drags a gcd
down to 1, and 4 or 6 alone have gcds 4 and 6.
```

### Example 3

```text
Input: nums = [6,10,15]
Output: 0
Explanation: Every subsequence has a different gcd: the singles have gcds
6, 10, 15, the pairs 2, 3, 5, and the whole array 1. No two disjoint
subsequences can agree.
```

### Constraints

- `1 <= nums.length <= 200`
- `1 <= nums[i] <= 200`

## Hints

### Hint 1

As you sweep the array, every element faces a three-way choice: join the
first subsequence, join the second, or stay unused. What single number
summarizes a subsequence for the final comparison?

### Hint 2

A gcd never grows as elements join, and it can never exceed
`max(nums) <= 200`. That caps the joint state at pairs of gcd values, so
a table indexed by `(g1, g2)` fits comfortably.

### Hint 3

The empty side needs a sentinel gcd (0 works, since real gcds are at
least 1). At the end, only the diagonal — equal, non-sentinel gcds on
both sides — counts.
