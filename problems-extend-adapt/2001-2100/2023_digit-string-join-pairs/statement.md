# Digit String Join Pairs

## Description

You are given a list `nums` whose entries are strings of digit characters,
along with one more digit string `target`. A join picks two different indices
`i` and `j` — the order matters — and glues `nums[i] + nums[j]` together.
Count how many ordered index choices produce exactly `target`. Two picks that
use the same string values at swapped positions still count separately, and a
value that appears several times in `nums` may be picked through any of its
occurrences.

### Example 1

```text
Input: nums = ["48","4","84","8","484"], target = "484"
Output: 2
Explanation: The joins that work are:
- (0, 1): "48" + "4"
- (1, 2): "4" + "84"
```

### Example 2

```text
Input: nums = ["31","7","3","17","317"], target = "317"
Output: 2
Explanation: The joins that work are:
- (0, 1): "31" + "7"
- (2, 3): "3" + "17"
```

### Example 3

```text
Input: nums = ["90","9","90"], target = "9090"
Output: 2
Explanation: The joins that work are:
- (0, 2): "90" + "90"
- (2, 0): "90" + "90"
```

### Constraints

- `2 <= nums.length <= 100`
- `1 <= nums[i].length <= 100`
- `2 <= target.length <= 100`
- Every entry of `nums`, and `target` itself, is built from digit characters.
- No string has a leading zero.

## Hints

### Hint 1

The list holds at most a hundred strings, so examining both positions of an
ordered pair directly is already within reach.

### Hint 2

Glue each candidate pair together in order and tally every result that lands
exactly on `target`.
