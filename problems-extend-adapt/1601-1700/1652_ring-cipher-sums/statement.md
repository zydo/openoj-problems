# Ring Cipher Sums

## Description

A message hides inside a circular sequence `code` of length `n`, and a
single integer `k` acts as its key. To recover the message, every slot of
`code` is rewritten simultaneously, each one derived from the untouched
original values:

- When `k` is positive, slot `i` becomes the sum of the `k` slots that
  come **after** it.
- When `k` is negative, slot `i` becomes the sum of the `|k|` slots that
  come **before** it.
- When `k` is zero, slot `i` simply becomes `0`.

The sequence has no boundary: the neighbor of the last slot is the first
slot, and the neighbor before the first slot is the last one. Output the
rewritten sequence.

### Example 1

```text
Input: code = [10, 4, 8], k = 2
Output: [12, 18, 14]
Explanation: Every slot adds the two slots after it, circling past the
end where necessary: 4 + 8, 8 + 10, and 10 + 4.
```

### Example 2

```text
Input: code = [6, 2, 9], k = -1
Output: [9, 6, 2]
Explanation: A key of -1 shifts each slot's view one step backward, so
each slot copies the value that precedes it on the ring.
```

### Example 3

```text
Input: code = [7], k = 0
Output: [0]
Explanation: A zero key blanks out every slot, including a one-slot
sequence.
```

### Example 4

```text
Input: code = [1, 2, 3, 4, 5], k = -3
Output: [12, 10, 8, 6, 9]
Explanation: Each slot sums the three slots before it; slot 0 collects
5 + 4 + 3, wrapping backward over the start of the sequence.
```

### Constraints

- `n == code.length`
- `1 <= n <= 100`
- `1 <= code[i] <= 100`
- `-(n - 1) <= k <= n - 1`

## Hints

### Hint 1

Every read index can be normalized with a double modulo — the usual `% n`
plus a correction step so negative offsets land inside the sequence
regardless of how the language treats remainders.

### Hint 2

With at most a hundred slots, summing each slot's window directly is
entirely adequate; prefix sums are an optimization, not a requirement.
