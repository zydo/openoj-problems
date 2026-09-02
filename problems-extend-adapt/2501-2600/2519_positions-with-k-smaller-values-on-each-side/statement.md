# Positions With K Smaller Values on Each Side

## Description

You are given a 0-indexed integer array `nums` and a positive integer
`k`.

A position `i` is sheltered when both of the following hold:

- At least `k` distinct positions `p1` exist with `p1 < i` and
  `nums[p1] < nums[i]`.
- At least `k` distinct positions `p2` exist with `p2 > i` and
  `nums[p2] < nums[i]`.

Return how many sheltered positions `nums` has.

### Example 1

```text
Input: nums = [1,2,1,3,2,1,4], k = 1
Output: 3
Explanation: Three positions qualify:
- i = 1 --> only the leading 1 is smaller on the left, and three smaller
  values (1, 1, 1) wait on the right.
- i = 3 --> the values 1, 2, 1 are smaller on the left and 2, 1, 1 are
  smaller on the right.
- i = 4 --> the values 1, 1 are smaller on the left and the trailing 1 is
  smaller on the right.
```

### Example 2

```text
Input: nums = [1,2,1,3,2,1,4], k = 2
Output: 1
Explanation: Raising the bar to 2 leaves only i = 3, the lone value that
attracts two smaller values from each direction.
```

### Example 3

```text
Input: nums = [4,2,1,3], k = 1
Output: 0
Explanation: Every value that sees something smaller on one side sees
none on the other, so no position qualifies.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i], k <= nums.length`

## Hints

### Hint 1

A structure indexed by value — not by position — can report, at any
moment, how many entries processed so far are strictly below a given
value.

### Hint 2

Sweep the array once from the left and record, above each position, how
many strictly smaller values came before it; a second sweep run from the
right produces the matching statistic for what follows.

### Hint 3

A position is sheltered exactly when both of its recorded counts reach
`k`.
