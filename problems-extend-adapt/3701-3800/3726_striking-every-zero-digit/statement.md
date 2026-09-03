# Striking Every Zero Digit

## Description

You are given a positive integer `n`.

Erase every digit `0` from the decimal representation of `n`, keeping the
remaining digits in their original order and reading them back as a single
ordinary integer. Runs of zeros — in the middle, at the end, or both — all
vanish at once. The constraints promise at least one nonzero digit, so the
result is always a positive integer and never comes out empty.

### Example 1

```text
Input: n = 7007007
Output: 777
Explanation: Removing the three 0 digits from 7007007 leaves 7, 7, 7 in
their original order, which read back together give 777.
```

### Example 2

```text
Input: n = 3000400
Output: 34
Explanation: The four zero digits drop out, leaving 3 and 4 in order, so
the answer is 34.
```

### Example 3

```text
Input: n = 808080
Output: 888
Explanation: Every other digit is a zero and disappears; the surviving 8s
concatenate into 888.
```

### Constraints

- `1 <= n <= 10¹⁵`

## Hints

### Hint 1

Peel digits off the least significant end: keep the nonzero ones, each
dropped into the next open slot of the result.

### Hint 2

Zero digits simply fall through without consuming a slot, which is what
collapses whole runs of them at no extra cost.
