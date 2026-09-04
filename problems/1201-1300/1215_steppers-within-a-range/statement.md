# Steppers Within a Range

## Description

Call an integer a _stepper_ when every pair of neighboring digits differs by
**exactly 1**. For instance, `123` qualifies (1→2, 2→3) while `124` does not
(its last gap is 2).

Given two integers `low` and `high`, return every stepper in the **closed**
range `[low, high]`, listed in ascending order.

### Example 1

```text
Input: low = 40, high = 130
Output: [43,45,54,56,65,67,76,78,87,89,98,101,121,123]
Explanation: Each listed value steps up or down by exactly 1 between every
pair of adjacent digits; nothing else in the range does.
```

### Example 2

```text
Input: low = 101, high = 101
Output: [101]
Explanation: A one-value range still counts — 1→0 and 0→1 both differ by
exactly 1, so 101 is a stepper.
```

### Example 3

```text
Input: low = 2000000000, high = 2000000000
Output: []
Explanation: The digits 2 and 0 differ by 2, so the range's only value is
not a stepper and the answer is empty.
```

### Constraints

- `0 <= low <= high <= 2 * 10⁹`

## Hints

### Hint 1

Do not test every integer in the range — build steppers instead. From a
value ending in digit `d`, the only possible extensions end in `d-1` or
`d+1`.

### Hint 2

Grow candidates from each one-digit seed, keep whatever lands inside
`[low, high]`, and abandon anything above `high`; an extension of a value
that is already too large is larger still.
