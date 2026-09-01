# Smallest Spread After Three Rewrites

## Description

You are given an integer array `nums`.

One move picks a single element and overwrites it with any value you like.

After **at most three moves**, return the smallest spread that remains —
that is, the least possible difference between the array's largest and
smallest values.

### Example 1

```text
Input: nums = [8,4,1,9,12]
Output: 1
Explanation: Rewrite 4, 1, and 12 so that two land on 8 and the third
lands on 9 — the array can become [8,8,8,9,8], whose extremes differ by
9 - 8 = 1. No three rewrites make every value equal.
```

### Example 2

```text
Input: nums = [2,10,7,4]
Output: 0
Explanation: With only four elements, three rewrites can pull all of them
onto a single value, so the spread collapses to 0.
```

### Example 3

```text
Input: nums = [15,3,22,9,30,1]
Output: 8
Explanation: Order the values: 1, 3, 9, 15, 22, 30. Spend all three
rewrites on the three largest values and land them inside [1, 9] — for
instance [1,3,9,3,3,9] — whose extremes differ by 9 - 1 = 8. No other
choice of victims does better.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `-10⁹ <= nums[i] <= 10⁹`

## Hints

### Hint 1

Only the sorted extremes can matter: an optimal plan never rewrites a
middle element, so its three moves are best spent erasing a total of
three values from the two ends of the sorted array.

### Hint 2

There are just four ways to split the erasures between the ends — drop
`i` smallest values and `3 - i` largest ones for `i = 0..3` — and each
split's remaining spread is the gap between the surviving window's
endpoints. Answer with the smallest of the four gaps.
