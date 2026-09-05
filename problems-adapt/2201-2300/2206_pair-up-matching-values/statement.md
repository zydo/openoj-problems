# Pair Up Matching Values

## Description

You are given an integer array `nums` holding exactly `2 * n` values.

Decide whether the values can be split into `n` pairs such that:

- every value is used by one pair and only one pair, and
- the two values inside a pair are equal.

Return `true` when such a split exists and `false` otherwise.

### Example 1

```text
Input: nums = [5,1,5,1,4,4]
Output: true
Explanation:
With 6 values the array must split into 3 pairs. Grouping them as
(5, 5), (1, 1), and (4, 4) pairs every value with an equal partner.
```

### Example 2

```text
Input: nums = [7,7,7,9,9,1]
Output: false
Explanation:
The value 7 appears three times, so after pairing two of the sevens one 7
is always left over with no equal partner. No valid split into 3 pairs
exists.
```

### Example 3

```text
Input: nums = [8,8,8,8]
Output: true
Explanation: The two pairs (8, 8) and (8, 8) use all four values.
```

### Constraints

- `nums.length == 2 * n`
- `1 <= n <= 500`
- `1 <= nums[i] <= 500`

## Hints

### Hint 1

Work value by value: for each number `x` in `[1, 500]`, tally how many
entries of `nums` equal `x`.

### Hint 2

A group of equal values splits perfectly into pairs exactly when its size
is even — one odd-sized group anywhere makes the whole split impossible.
