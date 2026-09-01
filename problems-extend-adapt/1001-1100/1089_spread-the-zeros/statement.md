# Spread the Zeros

## Description

Read an integer array left to right and write it back into the same
fixed-length array, but every time a `0` comes up, write it a second
time. Whatever the doubling pushes past the end is gone: the array
keeps its original length, and elements that would land beyond it are
simply discarded.

This judge reads only what your function returns, so carry out the
rewrite in `arr` itself and return it — the returned array is the
modified array.

### Example 1

```text
Input: arr = [8,4,0,3,0,2]
Output: [8,4,0,0,3,0]
Explanation: Each zero is written twice — the first one doubles into
positions 2 and 3, the second starts a pair at position 5 — and the
duplicate of that last zero plus the trailing 2 have nowhere to land,
so both fall off.
```

### Example 2

```text
Input: arr = [1,2,0,7]
Output: [1,2,0,0]
Explanation: The zero at index 2 doubles, pushing the 7 past the end
of the array.
```

### Example 3

```text
Input: arr = [0,0,9]
Output: [0,0,0]
Explanation: Doubling the two leading zeros floods the whole array
before the 9 is ever reached.
```

### Constraints

- `1 <= arr.length <= 10⁴`
- `0 <= arr[i] <= 9`

## Hints

### Hint 1

A spare array makes this easy: emit the doubled stream into it and cut
it back to the original length. The worthwhile version reuses the input
array itself.

### Hint 2

Writing left to right in place destroys values you have not read yet.
Sweep from the right instead — one pointer over the source, one over a
conceptually stretched destination — so every element is written to a
position at or to the right of where it came from and nothing unread is
lost.

### Hint 3

Start the write pointer one past the end of an array lengthened by the
count of zeros. Writes that land beyond the real length are skipped,
which is precisely the truncation the statement calls for.
