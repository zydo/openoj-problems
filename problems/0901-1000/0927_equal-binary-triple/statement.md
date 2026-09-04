# Equal Binary Triple

## Description

You are given an array `arr` of `0`s and `1`s. Cut it into three non-empty
contiguous pieces that all read as the same binary number.

A cut is described by a pair `[i, j]` with `i + 1 < j`:

- the first piece is `arr[0..i]`,
- the second piece is `arr[i+1..j-1]`,
- the third piece is `arr[j..end]`.

Each piece is read as a whole in base 2 — `[1,1,0]` is 6, not 3 — and pieces
may carry leading zeros, so `[0,1,1]` and `[1,1]` read as the same number.

Return a working `[i, j]`, or `[-1, -1]` when no cut exists.

A tie can only arise when every element of `arr` is `0`; to keep judging
deterministic, return the `[i, j]` with the smallest `i`, breaking remaining
ties by the smallest `j`.

### Example 1

```text
Input: arr = [1,1,0,1,1,0,1,1]
Output: [1,5]
Explanation: The pieces are [1,1], [0,1,1], and [0,1,1]. The leading zero of
a piece does not change its value, so all three read as 3.
```

### Example 2

```text
Input: arr = [1,1,1,0]
Output: [-1,-1]
Explanation: Whatever the cut, one piece ends in the trailing `0` while
another ends in `1`, so no three pieces can agree.
```

### Example 3

```text
Input: arr = [0,0,0,0]
Output: [0,2]
Explanation: Every cut works because all pieces read as 0, and the
deterministic rule keeps the smallest `i` and then the smallest `j`.
```

### Constraints

- `3 <= arr.length <= 3 * 10⁴`
- Every element of `arr` is `0` or `1`.
