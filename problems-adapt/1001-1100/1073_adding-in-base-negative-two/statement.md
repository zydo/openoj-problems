# Adding in Base Negative Two

## Description

Base `-2` ("negabinary") writes numbers using only the digits `0` and
`1`, but place values are powers of negative two: the positions from the
right are worth `1, -2, 4, -8, 16, ...`. For example, the digit string
`[1,1,0,1]` (most significant first) is the number
`(-2)^3 + (-2)^2 + (-2)^0 = -3`. Every value has exactly one
representation with no leading zeros: the array is either `[0]` or
starts with `1`.

You receive two numbers `arr1` and `arr2` in this format. Add them and
return the sum in the same format: an array of `0`s and `1`s, most
significant digit first, with no leading zeros (`[0]` alone stands for
zero).

### Example 1

```text
Input: arr1 = [1,1,0,1], arr2 = [1,0,1]
Output: [1,1,0]
Explanation: arr1 is -3 and arr2 is 5; the sum 2 comes out as [1,1,0].
```

### Example 2

```text
Input: arr1 = [1,0,1,1], arr2 = [1,1,1]
Output: [1,1,1,0]
Explanation: The inputs are -9 and 3, and the sum -6 is written
[1,1,1,0] — negative results are just as representable as positive ones.
```

### Example 3

```text
Input: arr1 = [1,1], arr2 = [1]
Output: [0]
Explanation: -1 plus 1 is 0, which must be returned as the single
digit [0].
```

### Constraints

- `1 <= arr1.length, arr2.length <= 1000`
- Every entry of `arr1` and `arr2` is `0` or `1`
- Neither array has a leading zero

## Hints

### Hint 1

Add column by column from the right, just like schoolbook addition — the
only surprise is what a carry means when the base is negative.

### Hint 2

If a column's raw total is `t`, one valid split is `t = digit + (-2) *
nextCarry`; pulling out `t`'s low bit as the digit and `-floor(t / 2)`
as the carry works uniformly even when `t` is negative.
