# Run-Limited Binary Arrays I

## Description

Call a binary array run-limited with budget `limit` when no run of
equal values is longer than `limit`. Equivalently, every subarray with
more than `limit` elements contains at least one `0` and at least one
`1`.

You are given three positive integers `zero`, `one`, and `limit`. Count
the binary arrays that hold exactly `zero` copies of `0`, exactly `one`
copies of `1`, and are run-limited with budget `limit`. The count can
be enormous, so report it modulo 10^9 + 7.

### Example 1

```text
Input: zero = 2, one = 1, limit = 2
Output: 3
Explanation: The arrays [0,0,1], [0,1,0], and [1,0,0] each hold two 0s
and one 1, and no equal values repeat more than twice in a row.
```

### Example 2

```text
Input: zero = 2, one = 2, limit = 1
Output: 2
Explanation: A budget of 1 forbids equal neighbors entirely, leaving
only the alternating [0,1,0,1] and [1,0,1,0].
```

### Example 3

```text
Input: zero = 2, one = 3, limit = 2
Output: 7
Explanation: Of the ten ways to order two 0s and three 1s, exactly the
three containing the unbroken run [1,1,1] are disqualified.
```

### Constraints

- `1 <= zero, one, limit <= 200`

## Hints

### Hint 1

Read the array as a sequence of blocks — maximal runs of one value.
Every block has length between 1 and `limit`, and adjacent blocks carry
opposite values.

### Hint 2

Build the array left to right. A state needs the numbers of `0`s and
`1`s placed so far, plus which value the array currently ends with.

### Hint 3

Appending a block of `k` opposite values is a windowed sum over earlier
states; prefix sums along each row make every transition O(1). The
answer is the total over the finished states ending in either value.
