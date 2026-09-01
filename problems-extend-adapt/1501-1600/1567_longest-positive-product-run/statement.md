# Longest Positive-Product Run

## Description

Given an array of integers `nums`, find how many consecutive elements
can be taken such that their product is strictly positive — and return
the best possible count.

A run here means a non-empty block of neighbouring elements. Multiplying
in a zero ruins the product, and an odd number of negative values turns
the product negative, so neither may appear in a counted run. If no run
at all has a positive product, return `0`.

### Example 1

```text
Input: nums = [2,-5,3,-1,-4]
Output: 4
Explanation: The run [2,-5,3,-1] holds two negative values, so its
product is positive — and no run of length 5 exists, since the full
array contains an odd (three) negatives. The answer is 4.
```

### Example 2

```text
Input: nums = [0,0,7,8]
Output: 2
Explanation: The run [7,8] has product 16. Nothing that crosses a zero
qualifies, and the zeros themselves certainly do not.
```

### Example 3

```text
Input: nums = [-4,0,-9]
Output: 0
Explanation: Every non-empty run either contains a zero or holds a
single negative number, so no run has a positive product.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `-10⁹ <= nums[i] <= 10⁹`

## Hints

### Hint 1

A run with a positive product can never contain a zero, so slice the
array into zero-delimited pieces and examine each piece separately.

### Hint 2

If a piece contains an even number of negative values, the whole piece
already has a positive product.

### Hint 3

With an odd number of negatives, one negative must go: either chop the
prefix ending at the piece's first negative value, or chop the suffix
beginning at its last — and only the longer surviving part matters.
