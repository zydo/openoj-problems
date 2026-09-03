# K-th Powers in a Window

## Description

Given three integers `l`, `r`, and `k`, count how many integers `y` with
`l <= y <= r` can be written as `y = xᵏ` for some integer base `x`.

Such values are perfect `k`th powers: raising a whole number to the `k`th
power lands exactly on them. Both `0 = 0ᵏ` and `1 = 1ᵏ` qualify no matter
what the exponent is.

### Example 1

```text
Input: l = 30, r = 100, k = 2
Output: 5
Explanation:
    The perfect squares between 30 and 100 are 36 = 6², 49 = 7²,
    64 = 8², 81 = 9², and 100 = 10².
```

### Example 2

```text
Input: l = 0, r = 40, k = 3
Output: 4
Explanation:
    The perfect cubes in the window are 0 = 0³, 1 = 1³, 8 = 2³, and
    27 = 3³. Zero counts because 0³ = 0.
```

### Example 3

```text
Input: l = 4, r = 6, k = 1
Output: 3
Explanation:
    With k = 1 every integer is the first power of itself, so all three
    values 4, 5, and 6 are counted.
```

### Example 4

```text
Input: l = 2, r = 20, k = 4
Output: 1
Explanation:
    Only 16 = 2⁴ falls in the window; 1 sits below `l`, and the next
    fourth power, 81, sits above `r`.
```

### Constraints

- `0 <= l <= r <= 10⁹`
- `1 <= k <= 30`

### Hint 1

Work per endpoint: tally the perfect `k`th powers not exceeding `r`, then
take away those strictly below `l`.

### Hint 2

The tally up to a bound `v` is one more than the largest base `x` with
`xᵏ <= v`; binary-search that base, multiplying one factor at a time and
stopping before the product can overflow.

### Hint 3

Two corners need special care: `k = 1` makes every integer in the window a
first power, and `l = 0` means the shared value `0 = 0ᵏ` must survive the
subtraction exactly once.
