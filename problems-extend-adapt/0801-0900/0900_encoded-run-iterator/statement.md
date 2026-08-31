# Encoded Run Iterator

## Description

An even-length array stores a sequence as `(count, value)` pairs. For every
even index `i`, the value at `encoding[i + 1]` occurs `encoding[i]` times.
Counts may be zero, and adjacent pairs may use the same value; neither changes
the decoded order.

Create an iterator that consumes this encoded sequence without expanding it.

Implement the `EncodedRunIterator` class:

- `EncodedRunIterator(int[] encoding)` initializes the iterator from the run
  pairs.
- `int consume(int n)` removes the next `n` decoded elements and returns the
  `n`-th removed value. If fewer than `n` elements remain, consume everything
  that is left and return `-1`.

After exhaustion, every later call returns `-1`.

### Example 1

```text
Input:
["EncodedRunIterator", "consume", "consume", "consume", "consume", "consume"]
[[[2,4,1,9,3,2]], [1], [2], [1], [2], [2]]
Output: [null, 4, 9, 2, 2, -1]
Explanation: The encoded sequence is [4,4,9,2,2,2]. The first four calls
consume all six values; the last request has nothing left to return.
```

### Constraints

- `2 <= encoding.length <= 1000`
- `encoding.length` is even.
- `0 <= encoding[i] <= 10⁹`
- `1 <= n <= 10⁹`
- At most `1000` calls are made to `consume`.
