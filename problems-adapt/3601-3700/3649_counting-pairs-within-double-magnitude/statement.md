# Counting Pairs Within Double Magnitude

## Description

An integer array `nums` is given.

Call an index pair `(i, j)` with `i < j` **compatible** when, taking
`a = nums[i]` and `b = nums[j]`, the two inequalities below are both true:

- `min(|a - b|, |a + b|) <= min(|a|, |b|)`
- `max(|a - b|, |a + b|) >= max(|a|, |b|)`

where `|x|` is the absolute value of `x`. Count the compatible pairs and
return that count.

### Example 1

```text
Input: nums = [3,-6,4,-1,2]
Output: 6
Explanation: Six index pairs qualify. The values 3 and -6 do, since
min(9, 3) = 3 <= min(3, 6) = 3 and max(9, 3) = 9 >= max(3, 6) = 6; the
values 4 and -1 do not, since min(5, 3) = 3 exceeds min(4, 1) = 1.
```

### Example 2

```text
Input: nums = [5,5,5]
Output: 3
Explanation: All three index pairs qualify: with equal values,
min(0, 10) = 0 <= 5 and max(0, 10) = 10 >= 5.
```

### Example 3

```text
Input: nums = [0,-4,8,1,2]
Output: 3
Explanation: The qualifying pairs are the values -4 with 8, -4 with 2, and
2 with 1. Any pairing of the 0 with a nonzero partner fails the first
check, and so does 8 next to 1 or 2.
```

### Constraints

- `2 <= nums.length <= 10⁵`
- `-10⁹ <= nums[i] <= 10⁹`

## Hints

### Hint 1

Set `x = |a|`, `y = |b|` with `x <= y`. Between `|a - b|` and `|a + b|`,
one is always `y - x` and the other `x + y`, so the second inequality comes
for free and the pair qualifies exactly when `y <= 2x`.

### Hint 2

Sort the entries by absolute value before counting.

### Hint 3

Sweep a second pointer: as `i` walks left to right, push `j` forward while
`|nums[j]| <= 2 * |nums[i]|`.

### Hint 4

Each `i` contributes `j - i - 1` pairs to the answer.
