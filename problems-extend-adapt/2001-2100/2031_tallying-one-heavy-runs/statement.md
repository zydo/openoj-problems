# Tallying One-Heavy Runs

## Description

You are given a binary array `nums` whose every element is `0` or `1`. Count
its runs — contiguous slices — in which the number of `1`s is strictly greater
than the number of `0`s. The count can be enormous, so report it modulo
`10⁹ + 7`.

### Example 1

```text
Input: nums = [1,0,1]
Output: 3
Explanation: The qualifying runs are the two single-element windows [1] and
the full window [1,0,1], whose pair of ones outweighs its single zero.
```

### Example 2

```text
Input: nums = [1,1,0]
Output: 4
Explanation: The qualifying runs are [1], [1], [1,1] and [1,1,0].
```

### Example 3

```text
Input: nums = [1,0,0,1]
Output: 2
Explanation: Only the two one-element windows [1] qualify — every longer
window here is balanced or holds more zeros than ones.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `0 <= nums[i] <= 1`

## Hints

### Hint 1

Score each `1` as `+1` and each `0` as `-1`, then maintain a running prefix
sum — a slice is one-heavy exactly when the sum rises across it.

### Hint 2

So the answer collects, for every position, how many earlier prefixes are
strictly below the current one.

### Hint 3

A Fenwick tree over the prefix values (shifted into positive range) answers
each "how many earlier prefixes are smaller" query in logarithmic time.
