# Runs of Rising Digits

## Description

A number counts as rising when every digit after the first is exactly
one greater than the digit before it: 1234 rises, 4789 rises, 130 does
not.

Given the inclusive integer bounds `low` and `high`, list every rising
number that lies in `[low, high]`, in increasing order.

### Example 1

```text
Input: low = 58, high = 155
Output: [67,78,89,123]
```

### Example 2

```text
Input: low = 12, high = 34
Output: [12,23,34]
```

### Example 3

```text
Input: low = 50, high = 55
Output: []
Explanation: No rising number falls inside this narrow band.
```

### Constraints

- `10 <= low <= high <= 10^9`

## Hints

### Hint 1

Rising numbers are scarce — each one is a contiguous slice of the digit
run `123456789`, so only a few dozen candidates can exist at all.

### Hint 2

Build candidates by choosing a starting digit and a length, emit them
smallest first, and stop as soon as a candidate climbs past `high`.
