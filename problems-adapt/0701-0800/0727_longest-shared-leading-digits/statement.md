# Longest Shared Leading Digits

## Description

You are given two arrays of positive integers, `arr1` and `arr2`.

A leading slice of an integer is the number formed by its first few digits,
read from the left — `74` and `7` are leading slices of `749`, while `49` is
not.

Two integers share a leading slice when the same number is a leading slice of
both. For instance, `3841` and `38455` share `3` and `384`, while `3841` and
`8431` share none.

Across every pair `(x, y)` with `x` drawn from `arr1` and `y` drawn from
`arr2`, report the length (in digits) of the longest shared leading slice. If
no pair shares one, report `0`.

### Example 1

```text
Input: arr1 = [7,74,749], arr2 = [7491,75]
Output: 3
Explanation: 749 and 7491 share the slice 749, three digits long — the deepest
agreement of any pair. Shorter overlaps exist (7 agrees with both of arr2's
elements on one digit, 74 with 7491 on two), but none is longer.
```

### Example 2

```text
Input: arr1 = [123,456], arr2 = [124,455]
Output: 2
Explanation: 123 pairs with 124 to share 12, and 456 pairs with 455 to share
45 — both two digits. No pair manages three.
```

### Example 3

```text
Input: arr1 = [11,22], arr2 = [33,44]
Output: 0
Explanation: Every cross pair starts with different digits, so no pair shares
any leading slice. (Agreement inside a single array never counts — only cross
pairs are examined.)
```

### Constraints

- `1 <= arr1.length, arr2.length <= 5 * 10^4`
- `1 <= arr1[i], arr2[i] <= 10^8`

## Hints

### Hint 1

Two numbers share a leading slice of length `L` exactly when their first `L`
digits agree. Restated that way, what does the cross-product search become?

### Hint 2

Gather every leading slice of every element of `arr1` into a hash set —
folding in one digit at a time, left to right, registers them all.

### Hint 3

For each element of `arr2`, walk its slices in increasing length and stop at
the first miss: slices nest, so once one length fails, no longer slice of that
number can hit either.
